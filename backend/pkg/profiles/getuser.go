package profiles

import (
	"context"

	"github.com/joshcarp/it-project/backend/pkg/database"

	"github.com/joshcarp/it-project/backend/pkg/proto/itproject"
)

func (s *Server) Getuser(ctx context.Context, in *itproject.GetuserRequest) (*itproject.Profile, error) {
	return database.GetProfile(s.db, in.Userid)
}

func (s *Server) Updateuser(context.Context, *itproject.Profile) (*itproject.UpdateuserResponse, error) {
	return nil, nil
}

type ProfilesClient interface {
}
