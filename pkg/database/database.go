package database

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/GoogleCloudPlatform/cloudsql-proxy/proxy/dialers/postgres"
	"github.com/joshcarp/it-project/pkg/config"
	_ "github.com/lib/pq"
	"github.com/sirupsen/logrus"
	"github.com/spf13/viper"
)

type DB struct {
	log    logrus.Logger
	config *viper.Viper
	db     *sql.DB
}

func NewDB(config *viper.Viper) *DB {
	db := &DB{config: config}
	db.db = db.openDatabase()
	return db
}

func (d *DB) openDatabase() *sql.DB {
	dsn := fmt.Sprintf("host=%s dbname=%s user=%s password=%s sslmode=disable",
		config.GetProperty(d.config, "database", "host"),
		config.GetProperty(d.config, "database", "dbname"),
		config.GetProperty(d.config, "database", "user"),
		config.GetProperty(d.config, "database", "password"),
	)
	db, err := sql.Open("cloudsqlpostgres", dsn)
	if err != nil {
		d.log.Fatal("cant open database", err)
	}
	return db
}

// GetAccountFromEmail returns an account with an email
func (d *DB) GetAccountFromEmail(email string) Account {
	if err := d.db.Ping(); err != nil {
		log.Fatalln(err)
	}
	rows, err := d.db.Query(fmt.Sprintf("Select %s FROM accounts", email))
	if err != nil {
		log.Fatalln(err)
	}
	account := Account{}
	for rows.Next() {
		err := rows.Scan(&account)
		if err != nil {
			log.Fatalln(err)
		}
	}
	return account
}

// GetAccountFromEmail returns an account with an email
func (d *DB) EnterUser(user Account) error {
	if err := d.db.Ping(); err != nil {
		return nil
	}
	query := fmt.Sprintf(`
INSERT INTO accounts (email, name, username, preferred_name, password, salt)
VALUES ('%s', '%s', '%s', '%s', '%s', '%s');`,
		user.Email, user.Name, user.Username, user.Preferred_name, "xxxx", "xxxx")

	_, err := d.db.Query(query)
	if err != nil {
		return err
	}
	return nil

}
