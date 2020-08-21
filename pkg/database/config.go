package database

import (
	"fmt"
	"io/ioutil"

	"github.com/pkg/errors"

	_ "github.com/GoogleCloudPlatform/cloudsql-proxy/proxy/dialers/postgres"
	"github.com/jmoiron/sqlx"
	"github.com/joshcarp/it-project/pkg/config"
	_ "github.com/lib/pq"
	_ "github.com/proullon/ramsql/driver"
)

// openDatabaseCloud opens a cloud sql connection
func (d *DB) openDatabaseCloud() error {
	dsn := fmt.Sprintf("host=%s dbname=%s user=%s password=%s sslmode=disable",
		config.GetProperty(d.config, "database", "host"),
		config.GetProperty(d.config, "database", "dbname"),
		config.GetProperty(d.config, "database", "user"),
		config.GetProperty(d.config, "database", "password"),
	)
	db, err := sqlx.Open("cloudsqlpostgres", dsn)
	if err != nil {
		return errors.Wrap(err, "cant open database")
	}
	d.db = db
	return nil
}

// openDatabaseCloud opens a normal database connection
func (d *DB) openDatabaseLocal() error {
	dsn := fmt.Sprintf("host=%s port=%s dbname=%s user=%s password=%s sslmode=disable",
		config.GetProperty(d.config, "database", "host"),
		config.GetProperty(d.config, "database", "port"),
		config.GetProperty(d.config, "database", "dbname"),
		config.GetProperty(d.config, "database", "user"),
		config.GetProperty(d.config, "database", "password"),
	)
	db, err := sqlx.Open("postgres", dsn)
	if err != nil {
		return errors.Wrap(err, "cant open database")
	}
	d.db = db
	return nil
}

// openDatabaseCloud opens a normal database connection
func (d *DB) openDatabaseMemory(filename string) error {
	db, err := sqlx.Open("ramsql", "")
	if err != nil {
		return errors.Wrap(err, "cant open database")
	}
	f, err := ioutil.ReadFile(filename)
	if err != nil {
		return errors.Wrap(err, "cant open database")
	}
	_, err = db.Exec(string(f))
	if err != nil {
		return errors.Wrap(err, "sql.Exec: Error: %s\n")
	}
	d.db = db
	return nil
}
