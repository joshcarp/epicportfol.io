package database

import (
	"fmt"
	"testing"

	"github.com/jmoiron/sqlx"

	"github.com/joshcarp/it-project/backend/internal/proto/itproject"

	"github.com/joshcarp/it-project/backend/internal/auth"

	"github.com/stretchr/testify/require"
)

type testcase struct {
	accounts []auth.Account
	err      bool
}

var db *sqlx.DB
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
	var err error
	if db == nil {
		db, err = openDatabaseMemory("../../../database/db.sql")
		require.Nil(t, err)
	}
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

func TestProfiles(t *testing.T) {
	var err error
	if db == nil {
		db, err = openDatabaseMemory("../../../database/db.sql")
		require.Nil(t, err)
	}
	err = EnterProfile(db, &itproject.Profile{
		Username: "foobar",
		Email:    "josh@joshcarp.com",
		FullName: "Joshua Carpeggiani",
		Picture:  "https://secure.gravatar.com/avatar/8f3ae66a1b3c1494de8971e428e9b6ae?s=500",
		Bio:      "i am a person",
		Jobs: []*itproject.Job{{
			Dates:       "2019",
			Title:       "Team member",
			Company:     "Edithvale Community Greengrocer",
			Description: "Delivering fresh vegetables to the edithvale community.",
		},
			{
				Dates:       "2019",
				Title:       "Engineer",
				Company:     "ANZ",
				Description: "Working on open source tools to help engineers develop faster.",
			}},
		Artifacts: []*itproject.Artifact{{
			Title:       "My face",
			Description: "My face",
			Link:        "https://secure.gravatar.com/avatar/8f3ae66a1b3c1494de8971e428e9b6ae?s=500",
		}},
		Links: []string{"https://github.com/joshcarp", "https://www.linkedin.com/in/joshcarp/"},
	})
	require.NoError(t, err)
	a, err := GetProfile(db, "joshcarp")
	require.NoError(t, err)
	fmt.Println(a)
}
