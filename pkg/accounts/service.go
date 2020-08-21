package accounts

import (
	"github.com/joshcarp/it-project/pkg/database"
	"github.com/joshcarp/it-project/proto/itproject"
	"github.com/sirupsen/logrus"
	"github.com/spf13/viper"
)

// server is used to implement helloworld.GreeterServer.
type Server struct {
	config   *viper.Viper
	database *database.DB
	itproject.UnimplementedItProjectServer
}

func NewServer(config *viper.Viper, log *logrus.Logger) *Server {
	return &Server{config: config, database: database.NewDB(config, log)}
}
