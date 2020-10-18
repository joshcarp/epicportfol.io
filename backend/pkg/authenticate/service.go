package authenticate

import (
	"github.com/joshcarp/it-project/backend/internal/auth"
	"github.com/joshcarp/it-project/backend/internal/config"
	"github.com/joshcarp/it-project/backend/internal/database"
	"github.com/joshcarp/it-project/backend/internal/proto/itproject"
	"github.com/sirupsen/logrus"
	"google.golang.org/grpc"
)

type Server struct {
	config   config.Config
	log      *logrus.Logger
	db       database.Server
	Firebase auth.Firebase
	itproject.UnimplementedAuthenticateServer
}

func NewServer(config config.Config, log *logrus.Logger) (*Server, error) {
	db, err := database.New(config.GCP.ProjectID)
	if err != nil {
		return nil, err
	}
	Firebase, err := auth.New(config)
	if err != nil {
		return nil, err
	}
	return &Server{config: config, db: db, log: log, Firebase: Firebase}, nil
}

func RegisterService(conf config.Config, log *logrus.Logger, s *grpc.Server) error {
	accountServer, err := NewServer(conf, log)
	if err != nil {
		return err
	}
	itproject.RegisterAuthenticateServer(s, accountServer)
	return nil
}
