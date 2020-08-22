package database

import (
	"testing"

	"github.com/joshcarp/it-project/backend/pkg/auth"

	"github.com/stretchr/testify/require"
)

type testcase struct {
	accounts []auth.Account
	err      bool
}

var tests = map[string]testcase{
	"Simple": {accounts: []auth.Account{{
		Email:          "123",
		Name:           "123",
		Username:       "123",
		Preferred_name: "123",
		Password:       "123",
		Salt:           "123",
	}}, err: false},
	"Duplicate emails": {accounts: []auth.Account{
		{
			Email:          "1",
			Name:           "2",
			Username:       "3",
			Preferred_name: "4",
			Password:       "5",
			Salt:           "6",
		},
		{
			Email:          "1",
			Name:           "22",
			Username:       "3",
			Preferred_name: "4",
			Password:       "5",
			Salt:           "6",
		}}, err: true},
	"Duplicate usernames": {accounts: []auth.Account{
		{
			Email:          "1",
			Name:           "2",
			Username:       "3",
			Preferred_name: "4",
			Password:       "5",
			Salt:           "6",
		},
		{
			Email:          "11",
			Name:           "2",
			Username:       "3",
			Preferred_name: "4",
			Password:       "5",
			Salt:           "6",
		}}, err: true},
}

func TestDatabase(t *testing.T) {
	db, err := openDatabaseMemory("../../../database/db.sql")
	require.Nil(t, err)
	var account *auth.Account
	for name, test := range tests {
		t.Run(name, func(t *testing.T) {
			for _, user := range test.accounts {
				err = EnterUser(db, user)
				if err != nil {
					// if we error here, then the err option on our testcase should be true
					require.Equal(t, true, test.err)
					return
				}
			}
			for _, user := range test.accounts {
				account, err = GetAccountFromEmail(db, user.Email)
				if err != nil {
					// if we error here, then the err option on our testcase should be true
					require.Equal(t, true, test.err)
					return
				}
				require.Equal(t, &user, account)
			}
		})
	}
}
