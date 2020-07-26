// Package main implements a server for Greeter service.
package main

import (
    "context"
    "fmt"
    "github.com/grpc-ecosystem/grpc-gateway/runtime"
    "google.golang.org/grpc"
    "google.golang.org/grpc/reflection"
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
var port = ":50051"
func main() {
    if p := os.Getenv("PORT"); p !=""{
        port = p
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
    fmt.Println("Starting server on "+port)
    go func (){
        fmt.Println("Starting http server "+port)
        if err := run(lis); err != nil {
            fmt.Println("Failed to run rest server")
            log.Fatalf("failed to serve: %v", err)
        }
    }()
    fmt.Println("Starting grpc server")
    if err := s.Serve(lis); err != nil {
        log.Fatalf("failed to serve: %v", err)
    }
}

func HelloServer(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello, %s!", r.URL.Path[1:])
}

func run(lis net.Listener) error {
    fmt.Println("Starting grpc server")
    ctx := context.Background()
    ctx, cancel := context.WithCancel(ctx)
    defer cancel()

    // Register gRPC server endpoint
    // Note: Make sure the gRPC server is running properly and accessible
    mux := runtime.NewServeMux()
    opts := []grpc.DialOption{grpc.WithInsecure()}
    err := itproject.RegisterItProjectHandlerFromEndpoint(ctx, mux, port, opts)
    if err != nil {
        return err
    }
    fmt.Println("http.Serve(lis, mux)")
    // Start HTTP server (and proxy calls to gRPC server endpoint)
    http.Handle("/hello", mux)
    return http.Serve(lis, nil)
}
