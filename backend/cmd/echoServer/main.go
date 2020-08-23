package main

import (
	"context"
	"fmt"
	"net"

	"github.com/joshcarp/it-project/backend/pkg/proto/itproject"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

func main() {
	lis, _ := net.Listen("tcp", ":8080")

	s := grpc.NewServer()
	reflection.Register(s)
	itproject.RegisterEchoServiceServer(s, &server{})
	fmt.Println("Starting grpc server")
	if err := s.Serve(lis); err != nil {
	}
}

type server struct {
	itproject.UnimplementedEchoServiceServer
}

func (s *server) Echo(ctx context.Context, req *itproject.EchoRequest) (*itproject.EchoResponse, error) {
	return &itproject.EchoResponse{Message: "Hello" + req.Message}, nil
}
