package profiles

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
	db       database.Server
	log      *logrus.Logger
	auth     bool
	Firebase auth.Firebase
	itproject.UnimplementedProfilesServer
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
	return &Server{config: config, db: db, log: log, auth: false, Firebase: Firebase}, nil
}

func RegisterService(conf config.Config, log *logrus.Logger, s *grpc.Server) error {
	ser, err := NewServer(conf, log)
	if err != nil {
		return err
	}
	itproject.RegisterProfilesServer(s, ser)
	return nil
}
