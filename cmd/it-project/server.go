// Package main implements a server for Greeter service.
package main

import (
    "context"
    "fmt"
    "google.golang.org/grpc"
    "log"
    "net"
    "net/http"
    "os"

    "github.com/joshcarp/it-project/proto/itproject"
)

// server is used to implement helloworld.GreeterServer.
type server struct {
    itproject.UnimplementedItProjectServer
}

func (s *server) Hello(ctx context.Context, request *itproject.HelloRequest) (*itproject.HelloResponse, error) {
    fmt.Println("hello func ")
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
    //http.HandleFunc("/", HelloServer)
    //http.ListenAndServe(port, nil)
    lis, err := net.Listen("tcp", port)
    if err != nil {
       log.Fatalf("failed to listen: %v", err)
    }
    s := grpc.NewServer()
    //reflection.Register(s)
    itproject.RegisterItProjectServer(s, &server{})
    fmt.Println("Starting server on "+port)
    if err := s.Serve(lis); err != nil {
       log.Fatalf("failed to serve: %v", err)
    }
}

func HelloServer(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello, %s!", r.URL.Path[1:])
}
