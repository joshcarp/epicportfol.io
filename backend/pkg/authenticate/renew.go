package authenticate

import (
	"context"

	"github.com/joshcarp/it-project/backend/internal/proto/itproject"
)

func (s *Server) RenewJWT(ctx context.Context, req *itproject.LoginRequest) (*itproject.LoginResponse, error) {
	return nil, nil
}
