package accounts

import (
	"context"

	"github.com/joshcarp/it-project/pkg/auth"
	"github.com/joshcarp/it-project/pkg/jwt"
	"github.com/joshcarp/it-project/proto/itproject"
)

func (s *Server) Register(ctx context.Context, req *itproject.RegisterRequest) (*itproject.RegisterResponse, error) {
	if err := s.database.EnterUser(auth.NewAccount(req.Email, req.FullName, req.Username, req.PreferredName, req.Password)); err != nil {
		return nil, err
	}
	token, err := jwt.Issue(map[string]interface{}{"email": req.Email})
	return &itproject.RegisterResponse{Jwt: token}, err
}
