package profiles

import (
	"context"
	"fmt"

	"github.com/joshcarp/it-project/backend/internal/auth"

	"github.com/joshcarp/it-project/backend/internal/proto/itproject"
)

func (s *Server) Getuser(ctx context.Context, in *itproject.GetuserRequest) (*itproject.Profile, error) {
	p, err := s.db.GetProfile(in.Userid)
	return p, err
}

func (s *Server) Updateuser(ctx context.Context, in *itproject.Profile) (*itproject.UpdateuserResponse, error) {
	var username interface{}
	var ok bool
	if s.auth {
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
		if username.(string) != in.Username {
			return nil, fmt.Errorf("Unauthorized")
		}
	}
	return &itproject.UpdateuserResponse{}, s.db.EnterProfile(in)
}
