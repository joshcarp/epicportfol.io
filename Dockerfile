FROM golang:alpine AS builder
WORKDIR /usr/src
ADD . .
RUN go build ./cmd/it-project

FROM alpine:3.10 AS nailgun
WORKDIR /usr/app
COPY --from=builder /usr/src/it-project .
EXPOSE 50051
ENTRYPOINT ["./it-project"]
