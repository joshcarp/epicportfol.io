package authenticate

import (
	"context"
	"fmt"

	"github.com/joshcarp/it-project/backend/pkg/auth"
	"github.com/joshcarp/it-project/backend/pkg/jwt"
	"github.com/joshcarp/it-project/backend/pkg/proto/itproject"
)

func (s *Server) Register(ctx context.Context, req *itproject.RegisterRequest) (*itproject.RegisterResponse, error) {
	account, err := auth.NewAccount(req.Email, req.FullName, req.Username, req.PreferredName, req.Password)
	if err != nil {
		s.log.Error(err)
		return nil, err
	}
	if a, err := s.db.GetProfile(req.Username); a != nil || err == nil {
		s.log.Error("user already exists")
		return nil, fmt.Errorf("user already exists")
	}
	if err := s.db.EnterUser(account); err != nil {
		s.log.Error(err)
		return nil, err
	}
	token, err := jwt.Issue(map[string]interface{}{"username": req.Username})
	if err := s.db.EnterProfile(&itproject.Profile{
		Username: account.Username,
		Email:    account.Email,
		FullName: account.Name,
	}); err != nil {
		s.log.Error(err)
		return nil, err
	}
	return &itproject.RegisterResponse{Jwt: token}, err
}

func (s *Server) RegisterFirebase(ctx context.Context, req *itproject.Empty) (*itproject.Empty, error) {
	creds, err := auth.GetToken(ctx, s.Firebase.ValidJwt)
	if err != nil {
		s.log.Error(err)
		return nil, err
	}
	username := creds["user_id"]
	email := creds["email"]
	if err := s.db.EnterProfile(&itproject.Profile{
		Username: username.(string),
		Email:    email.(string),
	}); err != nil {
		s.log.Error(err)
		return nil, err
	}
	return &itproject.Empty{}, nil
}
