all:proto

.PHONY: proto proto-docker
proto:
	docker run --rm -v $$(pwd):/itproject:rw joshcarp/protoc --go_out=paths=source_relative:. ./itproject/proto/itproject/api.proto
	docker run --rm -v $$(pwd):/itproject:rw joshcarp/protoc --go-grpc_out=paths=source_relative:. ./itproject/proto/itproject/api.proto
docker:
	docker build . -t joshcarp/it-project
run:
	docker run --rm -p 50051:50051 joshcarp/it-project
ping:
	docker run --rm joshcarp/grpcurl --plaintext host.docker.internal:50051 itproject.itProject/Hello
ping.prod:
	docker run --rm joshcarp/grpcurl joshcarp-it-project-ogaheemccq-uc.a.run.app:443 itproject.itProject/Hello
