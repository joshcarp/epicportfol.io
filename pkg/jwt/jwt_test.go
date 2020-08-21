package jwt

import (
	"testing"

	"github.com/dgrijalva/jwt-go"

	"github.com/stretchr/testify/require"
)

func TestEncode(t *testing.T) {
	claims := jwt.MapClaims{"abc": "def"}
	tokenString, err := Issue(claims)
	require.Nil(t, err)
	token := Decode(tokenString)
	require.Nil(t, token.Valid())
	require.Equal(t, claims, token)
}
