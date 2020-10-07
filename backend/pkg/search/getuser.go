package search

import (
	"context"

	"github.com/joshcarp/it-project/backend/pkg/database"

	"github.com/joshcarp/it-project/backend/pkg/proto/itproject"
)

func (s *Server) Search(ctx context.Context, in *itproject.SearchRequest) (*itproject.SearchResponse, error) {
	prof, err := database.GetProfileLike(s.db, in.Term)
	if err != nil {
		return nil, err
	}
	return &itproject.SearchResponse{
		Results: prof,
	}, nil
}
