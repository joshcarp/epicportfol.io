// Package main implements a server for Greeter service.
package main

import (
    "context"
    "database/sql"
    "fmt"
    _ "github.com/GoogleCloudPlatform/cloudsql-proxy/proxy/dialers/postgres"
    "github.com/joshcarp/it-project/proto/itproject"
    "google.golang.org/grpc"
    "google.golang.org/grpc/reflection"
    "log"
    "net"
    "os"
)

// server is used to implement helloworld.GreeterServer.
type server struct {
    itproject.UnimplementedItProjectServer
}

func (s *server) Hello(ctx context.Context, request *itproject.HelloRequest) (*itproject.HelloResponse, error) {
    fmt.Println("hello func ")
    return &itproject.HelloResponse{Content: "Hello World" + databaseTest("SELECT * FROM entries;")}, nil
}

var port = ":443"

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
    fmt.Println("Starting grpc server")
    if err := s.Serve(lis); err != nil {
      log.Fatalf("failed to serve: %v", err)
    }
}

func databaseTest(command string)string{
    dsn := fmt.Sprintf("host=%s dbname=%s user=%s password=%s sslmode=disable" ,
        "joshcarp-it-project:us-central1:joshcarp-it-project-2",
        "postgres",
        "postgres",
        "FA4p48K15vCPlC27",
    )
    db, err := sql.Open("cloudsqlpostgres", dsn)
    if err != nil {
        log.Fatalln(err)
    }
    defer db.Close()
    err = db.Ping()
    if err != nil{
        log.Fatalln(err)
    }

    rows, err := db.Query(command)
    if err != nil {
        log.Fatalln(err)
    }
    guestName := ""
    content := ""
    entryID := ""
    ret := ""
    for rows.Next() {
        err := rows.Scan(&guestName, &content, &entryID)
        if err != nil {
            log.Fatalln(err)
        }
        ret += fmt.Sprint(guestName, content, entryID)
    }
    fmt.Println(ret)
    return ret
}
