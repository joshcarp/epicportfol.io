package database

import (
	"fmt"

	"github.com/jmoiron/sqlx"
	"github.com/joshcarp/it-project/pkg/auth"
	"github.com/spf13/viper"
)

// NewDB creates a new database with a config and a logger
func NewDB(conf *viper.Viper) (*sqlx.DB, error) {
	switch conf.GetStringMapString("database")["type"] {
	case "memory":
		return openDatabaseMemory("database/db.sql")
	case "cloud":
		return openDatabaseCloud(conf)
	case "local":
		return openDatabaseLocal(conf)
	}
	return nil, fmt.Errorf("No database to open")
}

// GetAccountFromEmail returns an account with an email
func GetAccountFromEmail(db *sqlx.DB, email string) (*auth.Account, error) {
	if err := db.Ping(); err != nil {
		return nil, err
	}
	rows, err := db.Queryx(fmt.Sprintf(`Select * FROM accounts WHERE email='%s';`, email))
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
func EnterUser(db *sqlx.DB, user auth.Account) error {
	if err := db.Ping(); err != nil {
		return nil
	}
	query := fmt.Sprintf(`INSERT INTO accounts (email, name, username, preferred_name, password, salt)
VALUES ('%s', '%s', '%s', '%s', '%s', '%s');`,
		user.Email, user.Name, user.Username, user.Preferred_name, user.Password, user.Salt)

	_, err := db.Exec(query)
	if err != nil {
		return err
	}
	return nil
}

// VerifyUser verifies a user by hashing the password and checking against the database
func VerifyUser(db *sqlx.DB, email, password string) error {
	account, err := GetAccountFromEmail(db, email)
	if err != nil {
		return err
	}
	hash := auth.SaltPassword(password, account.Salt)
	if hash != account.Password {
		return fmt.Errorf("Incorrect password")
	}
	return nil
}
