package main

import (
    "context"
    "google.golang.org/grpc"
    "google.golang.org/grpc/credentials"
    "github.com/joshcarp/it-project/proto/itproject"
    "log"
    "os"
    "time"
)

func main() {
    address := os.Getenv("ADDR")

    creds, err := credentials.NewClientTLSFromFile("/etc/ssl/certs/ca-certificates.crt", "")
    if err != nil {
        log.Fatalf("failed to load credentials: %v", err)
    }

    // Set up a connection to the server.
    conn, err := grpc.Dial(address, grpc.WithTransportCredentials(creds))
    if err != nil {
        log.Fatalf("did not connect: %v", err)
    }
    defer conn.Close()
    c := itproject.NewItProjectClient(conn)

    // Contact the server and print out its response.
    name := "hello"
    if len(os.Args) > 1 {
        name = os.Args[1]
    }
    ctx, cancel := context.WithTimeout(context.Background(), time.Second)
    defer cancel()
    r, err := c.Hello(ctx, &itproject.HelloRequest{Content: name})
    if err != nil {
        log.Fatalf("could not greet: %v", err)
    }
    log.Printf("Greeting: %s", r.String())
}
