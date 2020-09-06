
// Sample storage-quickstart creates a Google Cloud Storage bucket.
package main

import (
	"github.com/joshcarp/it-project/backend/pkg/functions"
	"net"
	"net/http"
)

func main() {
	http.HandleFunc("/", functions.ServeHTTP)
	lis, _ := net.Listen("tcp",":8081" )
	http.Serve(lis, nil)
}
