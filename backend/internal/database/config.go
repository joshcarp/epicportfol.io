package database

import (
	"fmt"
	"io/ioutil"
	"strings"

	"github.com/pkg/errors"

	_ "github.com/GoogleCloudPlatform/cloudsql-proxy/proxy/dialers/postgres"
	"github.com/jmoiron/sqlx"
	"github.com/joshcarp/it-project/backend/internal/config"
	_ "github.com/lib/pq"
	_ "github.com/proullon/ramsql/driver"
)

// openDatabaseCloud opens a cloud sql connection
func openDatabaseCloud(conf config.Config) (*sqlx.DB, error) {
	dsn := fmt.Sprintf("host=%s dbname=%s user=%s password=%s sslmode=disable",
		conf.Database.Host,
		conf.Database.Dbname,
		conf.Database.User,
		conf.Database.Password,
	)
	db, err := sqlx.Open("cloudsqlpostgres", dsn)
	if err != nil {
		return db, errors.Wrap(err, "cant open database")
	}
	return db, nil
}

// openDatabaseCloud opens a normal database connection
func openDatabaseLocal(conf config.Config) (*sqlx.DB, error) {
	dsn := fmt.Sprintf("host=%s port=%s dbname=%s user=%s password=%s sslmode=disable",
		conf.Database.Host,
		conf.Database.Port,
		conf.Database.Dbname,
		conf.Database.User,
		conf.Database.Password,
	)
	db, err := sqlx.Open("postgres", dsn)
	if err != nil {
		return db, errors.Wrap(err, "cant open database")
	}
	return db, nil
}

// openDatabaseCloud opens a normal database connection
func openDatabaseMemory(filename string) (*sqlx.DB, error) {
	db, err := sqlx.Open("ramsql", "")
	if err != nil {
		return nil, errors.Wrap(err, "cant open database")
	}
	f, err := ioutil.ReadFile(filename)
	if err != nil {
		return nil, errors.Wrap(err, "cant open database")
	}
	for _, cmd := range strings.Split(string(f), ";") {
		if cmd == "\n" {
			continue
		}
		cmd += ";"
		_, err = db.Exec(cmd)
		if err != nil {
			return nil, errors.Wrap(err, "sql.Exec: Error: %s\n")
		}
	}
	return db, nil
}
