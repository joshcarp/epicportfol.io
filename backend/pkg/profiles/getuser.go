package profiles

import (
	"context"

	"github.com/joshcarp/it-project/backend/pkg/database"

	"github.com/joshcarp/it-project/backend/pkg/proto/itproject"
)

func (s *Server) Getuser(ctx context.Context, in *itproject.GetuserRequest) (*itproject.Profile, error) {
	p, err := database.GetProfile(s.db, in.Userid)
	return p, err
}

func (s *Server) Updateuser(ctx context.Context, in *itproject.Profile) (*itproject.UpdateuserResponse, error) {
	return &itproject.UpdateuserResponse{}, database.EnterProfile(s.db, in)
}

type ProfilesClient interface {
}
