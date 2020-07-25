FROM golang:alpine AS builder
WORKDIR /usr/src
ADD . .
RUN go build ./cmd/it-project

FROM alpine:3.10 AS nailgun
WORKDIR /usr/app
COPY --from=builder /usr/src/it-project .
RUN apk update && apk add ca-certificates && update-ca-certificates && rm -rf /var/cache/apk/*
ENTRYPOINT ["./it-project"]
