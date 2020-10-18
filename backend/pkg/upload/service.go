package upload

import (
	"bytes"
	"context"
	"fmt"

	"github.com/vincent-petithory/dataurl"

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
	filename, _ := auth.Salt()
	dataURL, err := dataurl.DecodeString(in.GetDataurl())
	if err != nil {
		return nil, err
	}
	err = UploadFile(bytes.NewReader(dataURL.Data), bucketname, filename, dataURL.MediaType.ContentType())
	if err != nil {
		return nil, err
	}
	url := fmt.Sprintf("https://storage.googleapis.com/%s/%s", bucketname, filename)
	return &itproject.UploadResponse{Url: url}, err
}

func RegisterService(conf config.Config, log *logrus.Logger, s *grpc.Server) error {
	ser, err := NewServer(conf, log)
	if err != nil {
		return err
	}
	itproject.RegisterUploadServer(s, ser)
	return nil
}
