package functions

import (
	"cloud.google.com/go/storage"
	"context"
	"fmt"
	"io"
	"net/http"
	"os"
	"path"
	"strings"
	"time"
)

func DownloadFileHandler(w http.ResponseWriter, r *http.Request){
	filename := strings.ReplaceAll(r.URL.Path, pathPrefix, "")
	filename = strings.TrimLeft(r.URL.Path, "/")
	r2, err := DownloadFile(bucketname, filename)
	if err != nil{
		fmt.Println(err)
		return
	}
	switch path.Ext(filename){
	case "png":
		w.Header().Set("Content-Type", "image/png")
	case ".html":
		w.Header().Set("Content-Type", "text/html")
	}
	_, err = io.Copy(os.Stdout, r2)
	if err != nil{
		fmt.Println(err)
	}
}

func DownloadFile(bucket, object string) (io.Reader, error) {
	ctx := context.Background()
	client, err := storage.NewClient(ctx)
	if err != nil {
		return nil, fmt.Errorf("storage.NewClient: %v", err)
	}
	defer client.Close()
	ctx, cancel := context.WithTimeout(ctx, time.Second*50)
	defer cancel()
	return client.Bucket(bucket).Object(object).NewReader(ctx)
}