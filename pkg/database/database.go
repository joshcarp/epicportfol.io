package database

import (
	"fmt"

	"github.com/jmoiron/sqlx"
	"github.com/joshcarp/it-project/pkg/auth"

	_ "github.com/GoogleCloudPlatform/cloudsql-proxy/proxy/dialers/postgres"
	"github.com/joshcarp/it-project/pkg/config"
	_ "github.com/lib/pq"
	"github.com/sirupsen/logrus"
	"github.com/spf13/viper"
)

type DB struct {
	log    logrus.Logger
	config *viper.Viper
	db     *sqlx.DB
}

func NewDB(config *viper.Viper) *DB {
	db := &DB{config: config}
	db.db = db.openDatabaseLocal()
	return db
}

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

// GetAccountFromEmail returns an account with an email
func (d *DB) GetAccountFromEmail(email string) (*auth.Account, error) {
	if err := d.db.Ping(); err != nil {
		return nil, err
	}
	rows, err := d.db.Queryx(fmt.Sprintf(`Select * FROM accounts WHERE email='%s';`, email))
	if err != nil {
		return nil, err
	}
	account := auth.Account{}
	for rows.Next() {
		err := rows.StructScan(&account)
		if err != nil {
			return nil, err
		}
	}
	return &account, err
}

// EnterUser returns an account with an email
func (d *DB) EnterUser(user auth.Account) error {
	if err := d.db.Ping(); err != nil {
		return nil
	}
	query := fmt.Sprintf(`
INSERT INTO accounts (email, name, username, preferred_name, password, salt)
VALUES ('%s', '%s', '%s', '%s', '%s', '%s');`,
		user.Email, user.Name, user.Username, user.Preferred_name, user.Password, user.Salt)

	_, err := d.db.Query(query)
	if err != nil {
		return err
	}
	return nil
}

func (d *DB) VerifyUser(email, password string) error {
	account, err := d.GetAccountFromEmail(email)
	if err != nil {
		return err
	}
	hash := auth.SaltPassword(password, account.Salt)
	if hash != account.Password {
		return fmt.Errorf("Incorrect password")
	}
	return nil
}
