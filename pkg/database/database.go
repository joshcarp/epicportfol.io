package database

import (
	"fmt"

	"github.com/jmoiron/sqlx"
	"github.com/joshcarp/it-project/pkg/auth"
	"github.com/sirupsen/logrus"
	"github.com/spf13/viper"
)

type DB struct {
	log    *logrus.Logger
	config *viper.Viper
	db     *sqlx.DB
}

func NewDB(config *viper.Viper, log *logrus.Logger) *DB {
	var err error
	db := &DB{config: config, log: log}
	switch config.GetStringMapString("database")["type"] {
	case "memory":
		err = db.openDatabaseMemory("database/db.sql")
	case "cloud":
		err = db.openDatabaseCloud()
	case "local":
		err = db.openDatabaseLocal()
	}
	if err != nil {
		db.log.Error(err)
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
	query := fmt.Sprintf(`INSERT INTO accounts (email, name, username, preferred_name, password, salt)
VALUES ('%s', '%s', '%s', '%s', '%s', '%s');`,
		user.Email, user.Name, user.Username, user.Preferred_name, user.Password, user.Salt)

	_, err := d.db.Exec(query)
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
