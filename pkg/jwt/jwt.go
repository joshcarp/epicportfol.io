package jwt

import (
	"fmt"

	"github.com/joshcarp/it-project/pkg/config"

	jwt "github.com/dgrijalva/jwt-go"
)

var secret = ""

func getSecret() string {
	if secret != "" {
		return secret
	}
	v, err := config.ReadConfig("common")
	if err != nil {
		panic(err)
	}
	secret = v.GetString("secret")
	return secret
}

func Encode(claims map[string]interface{}) (string, error) {
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims(claims))
	tokenString, err := token.SignedString([]byte(getSecret()))
	if err != nil {
		return "", err
	}
	return tokenString, nil
}

func Decode(tokenString string) jwt.MapClaims {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		// Don't forget to validate the alg is what you expect:
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}
		// hmacSampleSecret is a []byte containing your secret, e.g. []byte("my_secret_key")
		return []byte(getSecret()), nil
	})
	if err != nil {
		return nil
	}
	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		return claims
	}
	return nil
}
