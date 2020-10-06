package search

import (
	"github.com/jmoiron/sqlx"
	"github.com/joshcarp/it-project/backend/pkg/database"
	"github.com/joshcarp/it-project/backend/pkg/proto/itproject"
	"github.com/sirupsen/logrus"
	"github.com/spf13/viper"
)

// server is used to implement helloworld.GreeterServer.
type Server struct {
	config *viper.Viper
	db     *sqlx.DB
	itproject.UnimplementedSearchServer
}

func NewServer(config *viper.Viper, log *logrus.Logger) (*Server, error) {
	db, err := database.NewDB(config)
	if err != nil {
		return nil, err
	}
	return &Server{config: config, db: db}, nil
}
