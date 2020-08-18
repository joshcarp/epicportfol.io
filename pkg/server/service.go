package server

import (
	"context"

	"github.com/joshcarp/it-project/pkg/database"
	"github.com/joshcarp/it-project/proto/itproject"
	"github.com/spf13/viper"
)

// server is used to implement helloworld.GreeterServer.
type Server struct {
	config   *viper.Viper
	database *database.DB
	itproject.UnimplementedItProjectServer
}

func NewServer(config *viper.Viper) *Server {
	return &Server{config: config, database: database.NewDB(config)}
}

func (s *Server) Register(ctx context.Context, req *itproject.RegisterRequest) (*itproject.RegisterResponse, error) {
	err := s.database.EnterUser(database.NewAccount(req.Email, req.FullName, req.Username, req.PreferredName, req.Password))
	return &itproject.RegisterResponse{Jwt: "1234"}, err
}

func (s *Server) Login(ctx context.Context, req *itproject.LoginRequest) (*itproject.LoginResponse, error) {
	return nil, nil
}

func (s *Server) RenewJWT(ctx context.Context, req *itproject.LoginRequest) (*itproject.LoginResponse, error) {
	return nil, nil
}
