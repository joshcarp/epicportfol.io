// Package main implements a server for Greeter service.
package main

import (
	"github.com/joshcarp/it-project/backend/internal/server"
	"github.com/joshcarp/it-project/backend/pkg/profiles"

	"github.com/sirupsen/logrus"

	_ "github.com/GoogleCloudPlatform/cloudsql-proxy/proxy/dialers/postgres"
)

func main() {
	l := logrus.New()
	s, handler, conf, err := server.SetupServer()
	if err != nil {
		l.Fatal(err)
	}
	if err := profiles.RegisterService(conf, l, s); err != nil {
		l.Fatal(err)
	}
	server.Serve(conf, l, handler)
}
