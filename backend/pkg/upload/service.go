package upload

import (
	"bytes"
	"context"
	"fmt"
	"path"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"github.com/joshcarp/it-project/backend/internal/config"
	"github.com/sirupsen/logrus"
	"google.golang.org/grpc"

	"github.com/joshcarp/it-project/backend/internal/auth"

	"github.com/joshcarp/it-project/backend/internal/proto/itproject"
)

type Server struct {
	itproject.UnimplementedUploadServer
}

func NewServer(config config.Config, log *logrus.Logger) (*Server, error) {
	return &Server{}, nil
}

func (s *Server) Upload(ctx context.Context, in *itproject.UploadRequest) (*itproject.UploadResponse, error) {
	if in.Name == "" || in.Content == nil || len(in.Content) == 0 {
		return nil, status.Error(codes.InvalidArgument, "invalid name or content")
	}
	a, _ := auth.Salt()
	filename := a + path.Ext(in.GetName())
	err := UploadFile(bytes.NewReader(in.GetContent()), bucketname, filename)
	return &itproject.UploadResponse{Url: fmt.Sprintf("https://storage.googleapis.com/%s/%s", bucketname, filename)}, err
}

func RegisterService(conf config.Config, log *logrus.Logger, s *grpc.Server) error {
	ser, err := NewServer(conf, log)
	if err != nil {
		return err
	}
	itproject.RegisterUploadServer(s, ser)
	return nil
}
