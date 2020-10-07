package main

import (
	"github.com/joshcarp/it-project/backend/internal/server"
	"github.com/joshcarp/it-project/backend/pkg/upload"
	"github.com/sirupsen/logrus"

	_ "github.com/GoogleCloudPlatform/cloudsql-proxy/proxy/dialers/postgres"
)

func main() {
	l := logrus.New()
	s, handler, conf, err := server.SetupServer()
	if err != nil {
		l.Fatal(err)
	}
	if err := upload.RegisterService(conf, l, s); err != nil {
		l.Fatal(err)
	}
	server.Serve(conf, l, handler)
}
