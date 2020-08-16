package database

import (
	"crypto/md5"
)

type Account struct {
	Email          string `db:"email"`
	Name           string `db:"name"`
	Username       string `db:"username"`
	Preferred_name string `db:"preferred_name"`
	Password       string `db:"password"`
	salt           string `db:"salt"`
}

func NewAccount(email, name, username, preferred_name, password string) Account {
	salt := Salt()
	data := append([]byte(password), salt...)
	hash := md5.Sum(data)
	password = string(hash[:])
	return Account{Email: email, Name: name, Username: username, Preferred_name: preferred_name, Password: password, salt: string(salt)}
}
