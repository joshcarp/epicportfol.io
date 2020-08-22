package accounts

import (
	"context"

	"github.com/joshcarp/it-project/pkg/database"

	"github.com/joshcarp/it-project/pkg/auth"
	"github.com/joshcarp/it-project/pkg/jwt"
	"github.com/joshcarp/it-project/proto/itproject"
)

func (s *Server) Register(ctx context.Context, req *itproject.RegisterRequest) (*itproject.RegisterResponse, error) {
	account, err := auth.NewAccount(req.Email, req.FullName, req.Userid, req.PreferredName, req.Password)
	if err != nil {
		return nil, err
	}
	if err := database.EnterUser(s.db, *account); err != nil {
		return nil, err
	}
	token, err := jwt.Issue(map[string]interface{}{"email": req.Email})
	return &itproject.RegisterResponse{Jwt: token}, err
}