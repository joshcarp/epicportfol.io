package objects

type Profiles struct {
	Username       string `db:"username"`
	ProfilePicture string `db:"profile_picture"`
	Bio            string `db:"bio"`
}

type Job struct {
	Username    string `db:"username"`
	Dates       string `db:"dates"`
	Title       string `db:"title"`
	Company     string `db:"company"`
	Description string `db:"description"`
}

type Account struct {
	Email          string `db:"email"`
	Name           string `db:"name"`
	Username       string `db:"username"`
	Preferred_name string `db:"preferred_name"`
	Password       string `db:"password"`
	Salt           string `db:"salt"`
}

type Artifact struct {
	Username    string `db:"username"`
	Link        string `db:"link"`
	Description string `db:"description"`
	Title       string `db:"title"`
}

type Link struct {
	Username string `db:"username"`
	Link     string `db:"link"`
}
