package auth

import (
	"crypto/md5"
	"crypto/rand"
	"encoding/hex"
)

type Account struct {
	Email          string `db:"email"`
	Name           string `db:"name"`
	Username       string `db:"username"`
	Preferred_name string `db:"preferred_name"`
	Password       string `db:"password"`
	Salt           string `db:"salt"`
}

const saltlen = 100

func Salt() string {
	bytes := make([]byte, saltlen)
	rand.Read(bytes)
	hexSalt := make([]byte, hex.EncodedLen(len(bytes)))
	hex.Encode(hexSalt, bytes)
	return string(hexSalt)
}

func NewAccount(email, name, username, preferred_name, password string) Account {
	salt := Salt()
	hashedPass := SaltPassword(password, salt)
	return Account{Email: email, Name: name, Username: username, Preferred_name: preferred_name, Password: hashedPass, Salt: salt}
}

func SaltPassword(password, salt string) string {
	data := append([]byte(password), []byte(salt)...)
	hash := md5.Sum(data)
	src := hash[:]
	hexPassword := make([]byte, hex.EncodedLen(len(src)))
	hex.Encode(hexPassword, src)
	return string(hexPassword)
}
