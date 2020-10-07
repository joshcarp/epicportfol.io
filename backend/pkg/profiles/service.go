package profiles

import (
	"github.com/jmoiron/sqlx"
	"github.com/joshcarp/it-project/backend/internal/config"
	"github.com/joshcarp/it-project/backend/internal/database"
	"github.com/joshcarp/it-project/backend/internal/proto/itproject"
	"github.com/sirupsen/logrus"
	"google.golang.org/grpc"
)

type Server struct {
	config config.Config
	db     *sqlx.DB
	log    *logrus.Logger
	itproject.UnimplementedProfilesServer
}

func NewServer(config config.Config, log *logrus.Logger) (*Server, error) {
	db, err := database.NewDB(config)
	if err != nil {
		return nil, err
	}
	return &Server{config: config, db: db, log: log}, nil
}

func RegisterService(conf config.Config, log *logrus.Logger, s *grpc.Server) error {
	ser, err := NewServer(conf, log)
	if err != nil {
		return err
	}
	itproject.RegisterProfilesServer(s, ser)
	return nil
}
