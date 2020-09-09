package functions

import (
	"cloud.google.com/go/storage"
	"context"
	"time"
)

type Resource struct{
	Content []byte `json:"content"`
	FileName string `json:"filename"`
	ContentType string `json:"contenttype"`
}


func NewBucket(bucketName string)error{
	ctx := context.Background()
	client, err := storage.NewClient(ctx)
	if err != nil {
		return err
	}

	bucket := client.Bucket(bucketName)
	ctx, cancel := context.WithTimeout(ctx, time.Second*10)
	defer cancel()
	if err := bucket.Create(ctx, projectID, nil); err != nil {
		return err
	}
	return nil
}
