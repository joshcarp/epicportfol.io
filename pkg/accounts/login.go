package accounts

import (
	"context"

	"github.com/joshcarp/it-project/pkg/jwt"
	"github.com/joshcarp/it-project/proto/itproject"
)

func (s *Server) Login(ctx context.Context, req *itproject.LoginRequest) (*itproject.LoginResponse, error) {
	if err := s.database.VerifyUser(req.Email, req.Password); err != nil {
		return nil, err
	}
	token, err := jwt.Issue(map[string]interface{}{"email": req.Email})
	return &itproject.LoginResponse{Jwt: token}, err
}
