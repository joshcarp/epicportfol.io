all:proto
PRODADDR=joshcarp-it-project-ogaheemccq-uc.a.run.app
PORT=443
INCLUDE=-I/go/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis
.PHONY: proto proto-docker

proto:
	docker run --rm -v $$(pwd):/itproject:rw joshcarp/protoc $(INCLUDE) -I./itproject/proto/itproject/ --go_out=paths=source_relative:/itproject/proto/itproject/ api.proto
	docker run --rm -v $$(pwd):/itproject:rw joshcarp/protoc $(INCLUDE) -I././itproject/proto/itproject/ --go-grpc_out=paths=source_relative:/itproject/proto/itproject/ api.proto
	docker run --rm -v $$(pwd):/itproject:rw joshcarp/protoc $(INCLUDE) -I././itproject/proto/itproject/ --grpc-gateway_out=logtostderr=true,paths=source_relative:/itproject/proto/itproject/ api.proto
docker:
	docker build . -t joshcarp/it-project
run:
	docker run --rm -p 443:443 joshcarp/it-project
ping:
	docker run --rm joshcarp/grpcurl --plaintext host.docker.internal:$(PORT) itproject.itProject/Hello
ping.prod:
	docker run --rm joshcarp/grpcurl -d '{"Content": "Hello" }' $(PRODADDR):$(PORT) itProject.itProject.Hello
ping.prod.rest:
	curl
client:
	docker build . -f Dockerfile.client -t joshcarp/it-project-client
client.run:
	docker run --rm -e ADDR=$(PRODADDR):$(PORT) joshcarp/it-project-client
