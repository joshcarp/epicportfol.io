FROM golang:alpine AS builder
WORKDIR /usr/app
ADD . .
RUN go build ./backend/cmd/echoServer
RUN apk update && apk add ca-certificates && update-ca-certificates && rm -rf /var/cache/apk/*
ENTRYPOINT ["./echoServer"]
