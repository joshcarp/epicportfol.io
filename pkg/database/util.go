package database

import "crypto/rand"

const saltlen = 100

func Salt() []byte {
	bytes := make([]byte, saltlen)
	rand.Read(bytes)
	return bytes
}
