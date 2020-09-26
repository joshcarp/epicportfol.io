// Package main implements a server for Greeter service.
package main

import (
	"flag"
	"fmt"
	"log"
	"net"
	"net/http"
	"os"

	"github.com/sirupsen/logrus"

	_ "github.com/GoogleCloudPlatform/cloudsql-proxy/proxy/dialers/postgres"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"github.com/joshcarp/it-project/backend/pkg/accounts"
	"github.com/joshcarp/it-project/backend/pkg/config"
	"github.com/joshcarp/it-project/backend/pkg/proto/itproject"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

func main() {
	configFlag := flag.String("config", "local", "file (without ext) of the config file to load from config")
	flag.Parse()
	conf, err := config.ReadConfig(*configFlag)
	logger := logrus.New()
	if err != nil {
		logger.Fatal("Cannot read config")
	}
	var port string
	if p := os.Getenv("PORT"); p != "" {
		port = p
	} else {
		port = config.GetProperty(conf, "server", "port")
	}

	lis, err := net.Listen("tcp", "0.0.0.0:"+port)
	if err != nil {
		logger.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()

	reflection.Register(s)
	server, err := accounts.NewServer(conf, logger)
	if err != nil {
		logger.Errorf("Cannot connect to database %v", err)
	}
	itproject.RegisterAuthenticateServer(s, server)
	grpcweb_server :=grpcweb.WrapServer(s, grpcweb.WithOriginFunc(func(origin string) bool {
		// Allow all origins, DO NOT do this in production
		return true
	}))
	fmt.Println("Starting server on " + port)
	fmt.Println("Starting grpc server")
	log.Fatal(http.Serve(lis, grpcweb_server))
}
