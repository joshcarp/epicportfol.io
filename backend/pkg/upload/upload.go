package upload

import (
	"context"
	"fmt"
	"io"
	"mime"
	"path"
	"time"

	"cloud.google.com/go/storage"
)

const bucketname = `joshcarp-it-project-storage`

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
	wc := client.Bucket(bucket).Object(object)
	wr := wc.NewWriter(ctx)
	if _, err = io.Copy(wr, r); err != nil {
		return fmt.Errorf("io.Copy: %v", err)
	}
	if err := wr.Close(); err != nil {
		return fmt.Errorf("Writer.Close: %v", err)
	}
	if _, err = wc.Update(ctx, storage.ObjectAttrsToUpdate{
		ContentType: interface{}(mime.TypeByExtension(path.Ext(object))),
	}); err != nil {
		return err
	}

	return nil
}
