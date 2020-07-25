// Package main implements a server for Greeter service.
package main

import (
    "context"
    "google.golang.org/grpc/reflection"
    "log"
    "net"
    "os"

    "github.com/joshcarp/it-project/proto/itproject"
    "google.golang.org/grpc"
)

// server is used to implement helloworld.GreeterServer.
type server struct {
    itproject.UnimplementedItProjectServer
}

func (s *server) Hello(ctx context.Context, request *itproject.HelloRequest) (*itproject.HelloResponse, error) {
    return &itproject.HelloResponse{Content: "Hello World"}, nil
}

func main() {
    port := os.Getenv("PORT")
    if port == ""{
        port = ":50051"
    }
    if port[0] != ':'{
        port = ":"+port
    }
    lis, err := net.Listen("tcp", port)
    if err != nil {
        log.Fatalf("failed to listen: %v", err)
    }
    s := grpc.NewServer()
    reflection.Register(s)
    itproject.RegisterItProjectServer(s, &server{})
    if err := s.Serve(lis); err != nil {
        log.Fatalf("failed to serve: %v", err)
    }
}
