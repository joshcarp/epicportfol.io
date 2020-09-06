package functions

import (
	"cloud.google.com/go/storage"
	"context"
	"fmt"
	"io"
	"net/http"
	"strings"
	"time"
)

const bucketname = `joshcarp-it-project-storage`
const projectID = `joshcarp-it-project`
const pathPrefix = `joshcarp-it-project-storage`

func UploadFileFunc(w http.ResponseWriter, r *http.Request){
	filename := strings.ReplaceAll(r.URL.Path, pathPrefix, "")
	filename = strings.TrimLeft(filename, "/")
	err := UploadFile(r.Body, bucketname, filename)
	if err != nil{
		fmt.Println(err)
		return
	}
}

func UploadFile(r io.Reader, bucket, object string) error {
	ctx := context.Background()
	client, err := storage.NewClient(ctx)
	if err != nil {
		return fmt.Errorf("storage.NewClient: %v", err)
	}
	defer client.Close()

	// Open local file.
	ctx, cancel := context.WithTimeout(ctx, time.Second*50)
	defer cancel()
	wc := client.Bucket(bucket).Object(object).NewWriter(ctx)
	if _, err = io.Copy(wc, r); err != nil {
		return fmt.Errorf("io.Copy: %v", err)
	}
	if err := wc.Close(); err != nil {
		return fmt.Errorf("Writer.Close: %v", err)
	}
	return nil
}