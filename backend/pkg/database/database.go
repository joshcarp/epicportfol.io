package database

import (
	"fmt"

	"github.com/joshcarp/it-project/backend/pkg/objects"

	"github.com/joshcarp/it-project/backend/pkg/proto/itproject"

	"github.com/jmoiron/sqlx"
	"github.com/joshcarp/it-project/backend/pkg/auth"
	"github.com/spf13/viper"
)

// NewDB creates a new database with a config and a logger
func NewDB(conf *viper.Viper) (*sqlx.DB, error) {
	switch conf.GetStringMapString("database")["type"] {
	case "memory":
		return openDatabaseMemory("database/db.sql")
	case "cloud":
		return openDatabaseCloud(conf)
	case "local":
		return openDatabaseLocal(conf)
	}
	return nil, fmt.Errorf("No database to open")
}

// GetAccountFromEmail returns an account with an email
func GetAccountFromEmail(db *sqlx.DB, username string) (*auth.Account, error) {
	if err := db.Ping(); err != nil {
		return nil, err
	}
	rows, err := db.Queryx(fmt.Sprintf(`Select * FROM accounts WHERE username='%s';`, username))
	if err != nil {
		return nil, err
	}
	account := auth.Account{}
	for rows.Next() {
		err := rows.StructScan(&account)
		if err != nil {
			return nil, err
		}
	}
	return &account, err
}

// EnterUser returns an account with an email
func EnterUser(db *sqlx.DB, user auth.Account) error {
	if err := db.Ping(); err != nil {
		return nil
	}
	query := fmt.Sprintf(`INSERT INTO accounts (email, name, username, preferred_name, password, salt)
VALUES ('%s', '%s', '%s', '%s', '%s', '%s');`,
		user.Email, user.Name, user.Username, user.Preferred_name, user.Password, user.Salt)

	_, err := db.Exec(query)
	if err != nil {
		return err
	}
	return nil
}

// VerifyUser verifies a user by hashing the password and checking against the database
func VerifyUser(db *sqlx.DB, email, password string) error {
	account, err := GetAccountFromEmail(db, email)
	if err != nil {
		return err
	}
	hash := auth.SaltPassword(password, account.Salt)
	if hash != account.Password {
		return fmt.Errorf("Incorrect password")
	}
	return nil
}

// EnterUser returns an account with an email
func EnterProfile(db *sqlx.DB, profile *itproject.Profile) error {
	if err := db.Ping(); err != nil {
		return nil
	}
	_, err := db.Exec(fmt.Sprintf(`DELETE FROM profiles WHERE username='%s';`, profile.Username))
	if err != nil {
		return err
	}
	_, err = db.Exec(`INSERT INTO profiles (username, profile_picture, bio) VALUES ($1, $2, $3);`, profile.Username, profile.Picture, profile.Bio)
	if err != nil {
		return err
	}
	_, err = db.Exec(fmt.Sprintf(`DELETE FROM links WHERE username='%s';`, profile.Username))
	if err != nil {
		return err
	}
	for _, link := range profile.Links {
		_, err := db.Exec(`INSERT INTO links (username, link)VALUES ($1, $2);`, profile.Username, link)
		if err != nil {
			return err
		}
	}
	_, err = db.Exec(fmt.Sprintf(`DELETE FROM artifacts WHERE username='%s';`, profile.Username))
	if err != nil {
		return err
	}
	for _, image := range profile.Artifacts {
		_, err := db.Exec(`INSERT INTO artifacts (username, link)VALUES ($1, $2);`, profile.Username, image.Link)
		if err != nil {
			return err
		}
	}
	_, err = db.Exec(fmt.Sprintf(`DELETE FROM jobs WHERE username='%s';`, profile.Username))
	if err != nil {
		return err
	}
	for _, job := range profile.Jobs {
		_, err := db.Exec(`INSERT INTO jobs (username, dates, title, company, description)VALUES ($1, $2, $3, $4, $5);`, profile.Username, job.Dates, job.Title, job.Company, job.Description)
		return err
	}

	return nil
}

func GetProfile(db *sqlx.DB, user string) (*itproject.Profile, error) {
	ac := fmt.Sprintf("Select * FROM accounts WHERE username = '%s';", user)
	rows, err := db.Queryx(ac)
	if err != nil {
		return nil, err
	}
	account := objects.Account{}
	for rows.Next() {
		err := rows.StructScan(&account)
		if err != nil {
			return nil, err
		}
	}
	ac = fmt.Sprintf("Select * FROM profiles WHERE username = '%s';", user)
	rows, err = db.Queryx(ac)
	if err != nil {
		return nil, err
	}
	profile := objects.Profiles{}
	for rows.Next() {
		err := rows.StructScan(&profile)
		if err != nil {
			return nil, err
		}
	}
	ac = fmt.Sprintf("Select * FROM jobs WHERE username = '%s';", user)
	rows, err = db.Queryx(ac)
	if err != nil {
		return nil, err
	}
	var jobs []*itproject.Job
	job := objects.Job{}
	for rows.Next() {
		err := rows.StructScan(&job)
		if err != nil {
			return nil, err
		}
		jobs = append(jobs, &itproject.Job{
			Dates:       job.Dates,
			Title:       job.Title,
			Company:     job.Company,
			Description: job.Description,
		})
	}
	ac = fmt.Sprintf("Select * FROM artifacts WHERE username = '%s';", user)
	rows, err = db.Queryx(ac)
	if err != nil {
		return nil, err
	}
	var artifacts []*itproject.Artifact
	artifact := objects.Artifact{}
	for rows.Next() {
		err := rows.StructScan(&artifact)
		if err != nil {
			return nil, err
		}
		artifacts = append(artifacts, &itproject.Artifact{
			Title:       artifact.Title,
			Description: artifact.Description,
			Link:        artifact.Link,
		})
	}
	ac = fmt.Sprintf("Select * FROM links WHERE username = '%s';", user)
	rows, err = db.Queryx(ac)
	if err != nil {
		return nil, err
	}
	var links []string
	link := objects.Link{}
	for rows.Next() {
		err := rows.StructScan(&link)
		if err != nil {
			return nil, err
		}
		links = append(links, link.Link)
	}
	prof := itproject.Profile{
		Username:  user,
		Email:     account.Email,
		FullName:  account.Name,
		Bio:       profile.Bio,
		Picture:   profile.ProfilePicture,
		Jobs:      jobs,
		Artifacts: artifacts,
		Links:     links,
	}
	return &prof, nil
}

func GetProfileLike(db *sqlx.DB, user string) ([]*itproject.SingleSearchResponse, error) {
	ac := fmt.Sprintf(`Select * FROM profiles WHERE username LIKE '%%%s%%';`, user)
	rows, err := db.Queryx(ac)
	if err != nil {
		return nil, err
	}
	profiles := []*itproject.SingleSearchResponse{}
	for rows.Next() {
		profile := objects.Profiles{}
		err := rows.StructScan(&profile)
		if err != nil {
			return nil, err
		}
		profiles = append(profiles, &itproject.SingleSearchResponse{
			Username: profile.Username,
			Picture:  profile.ProfilePicture,
			Bio:      profile.Bio,
		})
	}

	return profiles, nil
}
