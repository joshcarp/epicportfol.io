package authenticate

import (
	"context"

	"github.com/joshcarp/it-project/backend/internal/auth"
	"github.com/joshcarp/it-project/backend/internal/proto/itproject"
)

func (s *Server) Verify(ctx context.Context, req *itproject.VerifyRequest) (*itproject.VerifyResponse, error) {
	creds, err := auth.GetToken(ctx)
	if err != nil {
		return nil, err
	}
	return &itproject.VerifyResponse{Verified: creds["username"].(string) == req.Username}, nil
}
