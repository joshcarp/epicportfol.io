package database

import (
	"fmt"
	"io/ioutil"

	_ "github.com/GoogleCloudPlatform/cloudsql-proxy/proxy/dialers/postgres"
	"github.com/jmoiron/sqlx"
	"github.com/joshcarp/it-project/pkg/config"
	_ "github.com/lib/pq"
	_ "github.com/proullon/ramsql/driver"
)

// openDatabaseCloud opens a cloud sql connection
func (d *DB) openDatabaseCloud() *sqlx.DB {
	dsn := fmt.Sprintf("host=%s dbname=%s user=%s password=%s sslmode=disable",
		config.GetProperty(d.config, "database", "host"),
		config.GetProperty(d.config, "database", "dbname"),
		config.GetProperty(d.config, "database", "user"),
		config.GetProperty(d.config, "database", "password"),
	)
	db, err := sqlx.Open("cloudsqlpostgres", dsn)
	if err != nil {
		d.log.Fatal("cant open database", err)
	}
	return db
}

// openDatabaseCloud opens a normal database connection
func (d *DB) openDatabaseLocal() *sqlx.DB {
	dsn := fmt.Sprintf("host=%s port=%s dbname=%s user=%s password=%s sslmode=disable",
		config.GetProperty(d.config, "database", "host"),
		config.GetProperty(d.config, "database", "port"),
		config.GetProperty(d.config, "database", "dbname"),
		config.GetProperty(d.config, "database", "user"),
		config.GetProperty(d.config, "database", "password"),
	)
	db, err := sqlx.Open("postgres", dsn)
	if err != nil {
		d.log.Fatal("cant open database", err)
	}
	return db
}

// openDatabaseCloud opens a normal database connection
func (d *DB) openDatabaseMemory() *sqlx.DB {
	db, err := sqlx.Open("ramsql", "")
	if err != nil {
		d.log.Fatal("cant open database", err)
	}
	f, err := ioutil.ReadFile("database/db.sql")
	if err != nil {
		d.log.Fatal("cant open database", err)
	}
	_, err = db.Exec(string(f))
	if err != nil {
		d.log.Fatalf("sql.Exec: Error: %s\n", err)
	}
	return db
}
