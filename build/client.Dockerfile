FROM golang:alpine AS builder
WORKDIR /usr/src
ADD . .
RUN go build ./backend/cmd/it-project-client

FROM alpine:3.10
WORKDIR /usr/app
COPY --from=builder /usr/src/it-project-client .
RUN apk update && apk add ca-certificates && update-ca-certificates && rm -rf /var/cache/apk/*
ENTRYPOINT ["./it-project-client"]
