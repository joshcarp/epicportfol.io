// Package main implements a server for Greeter service.
package main

import (
	"flag"
	"fmt"
	"log"
	"net"
	"net/http"
	"os"

	"github.com/joshcarp/it-project/backend/pkg/upload"

	"github.com/improbable-eng/grpc-web/go/grpcweb"

	"github.com/sirupsen/logrus"

	_ "github.com/GoogleCloudPlatform/cloudsql-proxy/proxy/dialers/postgres"
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

	lis, err := net.Listen("tcp", ":"+port)
	if err != nil {
		logger.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	reflection.Register(s)
	server, err := upload.NewServer()
	if err != nil {
		logger.Errorf("Cannot connect to database %v", err)
	}
	itproject.RegisterUploadServer(s, server)
	grpcweb_server := grpcweb.WrapServer(s, grpcweb.WithOriginFunc(func(origin string) bool {
		return true
	}))
	fmt.Println("Starting server on " + port)
	fmt.Println("Starting grpc server")
	log.Fatal(http.Serve(lis, grpcweb_server))
}
