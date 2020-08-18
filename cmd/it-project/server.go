// Package main implements a server for Greeter service.
package main

import (
    "flag"
    "fmt"
    _ "github.com/GoogleCloudPlatform/cloudsql-proxy/proxy/dialers/postgres"
    "github.com/joshcarp/it-project/pkg/config"
    "github.com/joshcarp/it-project/pkg/server"
    "github.com/joshcarp/it-project/proto/itproject"
    "google.golang.org/grpc"
    "google.golang.org/grpc/reflection"
    "log"
    "net"
    "os"
)

func main() {
    configFlag := flag.String("config", "local", "file (without ext) of the config file to load from config")
    flag.Parse()
    conf, err := config.ReadConfig(*configFlag)
    if err != nil{
        log.Fatal("Cannot read config")
    }
    var port string
    if p := os.Getenv("PORT"); p !=""{
      port = p
    } else{
        port = config.GetProperty(conf, "server","port")
    }

    lis, err := net.Listen("tcp", ":"+port)
    if err != nil {
     log.Fatalf("failed to listen: %v", err)
    }
    s := grpc.NewServer()
    reflection.Register(s)
    itproject.RegisterItProjectServer(s, server.NewServer(conf))
    fmt.Println("Starting server on "+port)
    fmt.Println("Starting grpc server")
    if err := s.Serve(lis); err != nil {
      log.Fatalf("failed to serve: %v", err)
    }
}
