package auth

import (
	"context"
	"crypto/md5"
	"crypto/rand"
	"encoding/base64"
	"encoding/hex"
	"fmt"
	"strings"

	"github.com/joshcarp/it-project/pkg/jwt"
	"google.golang.org/grpc"
	"google.golang.org/grpc/metadata"
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

// EnsureValidToken ensures that the context of an incoming request is valid
func EnsureValidToken(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (interface{}, error) {
	md, ok := metadata.FromIncomingContext(ctx)
	if !ok {
		return nil, fmt.Errorf("No auth found")
	}
	if err := valid(md["authorization"]); err != nil {
		return nil, err
	}
	return handler(ctx, req)
}

// valid validates the authorization.
func valid(authorization []string) error {
	if len(authorization) < 1 {
		return fmt.Errorf("auth not found")
	}
	token := strings.TrimPrefix(authorization[0], "Bearer ")
	jwtToken := jwt.Decode(token)
	if err := jwtToken.Valid(); err != nil {
		return err
	}
	return nil
}

/* BasicAuth gets the */
func BasicAuth(ctx context.Context) (whatever string, asdasd string, err error) {
	md, ok := metadata.FromIncomingContext(ctx)
	if !ok {
		return "", "", fmt.Errorf("No auth found")
	}
	authorization := md["authorization"]
	token := strings.TrimPrefix(authorization[0], "Basic ")
	unamePwd, _ := base64.StdEncoding.DecodeString(token)
	tmp := strings.Split(string(unamePwd), ":")
	if len(tmp) < 2 {
		return "", "", fmt.Errorf("auth not valid: need in form Base64(username:password)")
	}
	return tmp[0], tmp[1], nil

}
