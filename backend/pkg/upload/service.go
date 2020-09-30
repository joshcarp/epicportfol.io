package upload

import (
	"bytes"
	"context"

	"github.com/joshcarp/it-project/backend/pkg/proto/itproject"
)

// server is used to implement helloworld.GreeterServer.
type Server struct {
	itproject.UnimplementedUploadServer
}

func NewServer() (*Server, error) {
	return &Server{}, nil
}

func (s *Server) Upload(ctx context.Context, in *itproject.UploadRequest) (*itproject.UploadResponse, error) {
	err := UploadFile(bytes.NewReader(in.GetContent()), bucketname, in.GetName())
	return &itproject.UploadResponse{}, err
}
