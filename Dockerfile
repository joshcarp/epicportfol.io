FROM golang:alpine AS builder
WORKDIR /usr/app
ADD . .
RUN go build ./cmd/authenticate
RUN apk update && apk add ca-certificates && update-ca-certificates && rm -rf /var/cache/apk/*
ENTRYPOINT ["./authenticate"]
