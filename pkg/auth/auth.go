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

const saltlen = 32

func Salt() (string, error) {
	bytes := make([]byte, saltlen)
	_, err := rand.Read(bytes)
	if err != nil {
		return "", err
	}
	hexSalt := make([]byte, hex.EncodedLen(len(bytes)))
	hex.Encode(hexSalt, bytes)
	return string(hexSalt), err
}

func NewAccount(email, name, username, preferred_name, password string) (*Account, error) {
	salt, err := Salt()
	if err != nil {
		return nil, err
	}
	hashedPass := SaltPassword(password, salt)
	return &Account{Email: email, Name: name, Username: username, Preferred_name: preferred_name, Password: hashedPass, Salt: salt}, nil
}

func SaltPassword(password, salt string) string {
	data := append([]byte(password), []byte(salt)...)
	hash := md5.Sum(data)
	src := hash[:]
	hexPassword := make([]byte, hex.EncodedLen(len(src)))
	hex.Encode(hexPassword, src)
	return string(hexPassword)
}
