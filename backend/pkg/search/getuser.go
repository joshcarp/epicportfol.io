package search

import (
	"context"

	"github.com/joshcarp/it-project/backend/pkg/database"

	"github.com/joshcarp/it-project/backend/pkg/proto/itproject"
)

func (s *Server) Search(ctx context.Context, in *itproject.SearchRequest) (*itproject.SearchResponse, error) {
	prof, err := database.GetProfile(s.db, in.Term)
	if err != nil {
		return nil, err
	}
	return &itproject.SearchResponse{
		Username: prof.Username,
		FullName: prof.FullName,
		Picture:  prof.FullName,
		Bio:      prof.Bio,
	}, err
}
