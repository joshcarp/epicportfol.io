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
		if err != nil {
			return nil, err
		}
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

func (s *Server) RegisterFirebase(ctx context.Context, req *itproject.Empty) (*itproject.Empty, error) {
	creds, err := auth.GetToken(ctx, s.Firebase.ValidJwt)
	if err != nil {
		return nil, err
	}
	username := creds["user_id"]
	email := creds["email"]
	if err := s.db.EnterProfile(&itproject.Profile{
		Username: username.(string),
		Email:    email.(string),
	}); err != nil {
		return nil, err
	}
	return &itproject.Empty{}, nil
}
