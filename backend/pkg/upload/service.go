package upload

import (
	"bytes"
	"context"
	"fmt"
	"path"

	"github.com/joshcarp/it-project/backend/pkg/auth"

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
	a, _ := auth.Salt()
	filename := a + path.Ext(in.GetName())
	err := UploadFile(bytes.NewReader(in.GetContent()), bucketname, filename)
	return &itproject.UploadResponse{Url: fmt.Sprintf("https://storage.googleapis.com/%s/%s", bucketname, filename)}, err
}
