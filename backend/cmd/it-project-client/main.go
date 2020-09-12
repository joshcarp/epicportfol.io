package main

import (
	"context"
	"log"
	"os"
	"time"

	"github.com/joshcarp/it-project/backend/pkg/proto/itproject"
	"google.golang.org/grpc"
)

func main() {
	address := os.Getenv("ADDR")

	//creds, err := credentials.NewClientTLSFromFile("/etc/ssl/certs/ca-certificates.crt", "")
	//if err != nil {
	//	log.Fatalf("failed to load credentials: %v", err)
	//}

	// Set up a connection to the server.
	conn, err := grpc.Dial(address)
	if err != nil {
		log.Fatalf("did not connect: %v", err)
	}
	defer conn.Close()
	c := itproject.NewAuthenticateClient(conn)

	// Contact the server and print out its response.
	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()
	r, err := c.Register(ctx, &itproject.RegisterRequest{
		Email:         "joshcarp@gmail.com",
		Userid:        "josh",
		FullName:      "Joshua Carpeggiani",
		PreferredName: "Josh",
		Password:      "1234",
	})
	if err != nil {
		log.Fatalf("could not greet: %v", err)
	}
	log.Printf("Greeting: %s", r.String())
}
