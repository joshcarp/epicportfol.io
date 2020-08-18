package database

import (
	"crypto/md5"
	"encoding/hex"
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
	hashedPass, salt := SaltPassword(password)
	return Account{Email: email, Name: name, Username: username, Preferred_name: preferred_name, Password: hashedPass, salt: salt}
}

func SaltPassword(password string) (string, string) {
	salt := Salt()
	data := append([]byte(password), salt...)
	hash := md5.Sum(data)
	src := hash[:]
	hexPassword := make([]byte, hex.EncodedLen(len(src)))
	hexSalt := make([]byte, hex.EncodedLen(len(salt)))
	hex.Encode(hexPassword, src)
	hex.Encode(hexSalt, salt)
	return string(hexPassword), string(hexSalt)
}
