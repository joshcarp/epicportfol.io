package authenticate

import (
	"context"
	"fmt"

	"github.com/joshcarp/it-project/backend/internal/auth"
	"github.com/joshcarp/it-project/backend/internal/proto/itproject"
)

func (s *Server) Verify(ctx context.Context, req *itproject.VerifyRequest) (*itproject.VerifyResponse, error) {
	var username interface{}
	var ok bool
	creds, err := auth.GetToken(ctx, auth.ValidJwt)
	if err != nil {
		creds, err = auth.GetToken(ctx, s.Firebase.ValidJwt)
		username, ok = creds["user_id"]
		if !ok {
			return nil, fmt.Errorf("Unauthorized")
		}
	} else {
		username, ok = creds["username"]
		if !ok {
			return nil, fmt.Errorf("Unauthorized")
		}
	}
	return &itproject.VerifyResponse{Verified: username.(string) == req.Username}, nil
}
