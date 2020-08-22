package accounts

import (
	"context"

	"github.com/joshcarp/it-project/pkg/auth"

	"github.com/joshcarp/it-project/pkg/database"

	"github.com/joshcarp/it-project/pkg/jwt"
	"github.com/joshcarp/it-project/proto/itproject"
)

func (s *Server) Login(ctx context.Context, req *itproject.LoginRequest) (*itproject.LoginResponse, error) {
	username, password, err := auth.BasicAuth(ctx)
	if err != nil {
		return nil, err
	}
	if err := database.VerifyUser(s.db, username, password); err != nil {
		return nil, err
	}
	token, err := jwt.Issue(map[string]interface{}{"email": username})
	return &itproject.LoginResponse{Jwt: token}, err
}
