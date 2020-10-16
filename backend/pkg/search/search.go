package search

import (
	"context"

	"github.com/joshcarp/it-project/backend/internal/proto/itproject"
)

func (s *Server) Search(ctx context.Context, in *itproject.SearchRequest) (*itproject.SearchResponse, error) {
	prof, err := s.db.GetProfileLike(in.Term)
	if err != nil {
		return nil, err
	}
	return &itproject.SearchResponse{
		Results: prof,
	}, nil
}
