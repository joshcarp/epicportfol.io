all:proto

.PHONY: proto proto-docker
proto:
	docker run --rm -v $$(pwd):/itproject:rw joshcarp/grpc-go --go_out=paths=source_relative:. ./itproject/proto/api.proto

proto-docker:
	docker build build/ -t joshcarp/grpc-go

proto-docker.push:
	docker push joshcarp/grpc-go