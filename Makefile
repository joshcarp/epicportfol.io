all:proto
PRODADDR=joshcarp-it-project-ogaheemccq-uc.a.run.app
PORT=443
INCLUDE=-I/go/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis
.PHONY: proto proto-docker

sysl:
	docker run --rm -v $$(pwd):/itproject:rw anzbank/protoc-gen-sysl:v0.0.20 $(INCLUDE) -I./itproject/proto/ --sysl_out=/itproject/sysl/generated/ *.proto

docs: sysl
	rm -rf service-documentation/ || true
	mkdir service-documentation
	docker run --rm -v $$(pwd)/:/usr/it-project:rw -v $$(pwd)/service-documentation:/out:rw  anzbank/sysl-catalog:v1.4.148 --embed --outputFileName={{.Title}}.md --plantuml=https://plantuml.com/plantuml --templates=it-project/sysl/templates/project.tmpl,it-project/sysl/templates/package.tmpl ./it-project/sysl/index.sysl
docs.preview: sysl
	docker run --rm -v $$(pwd)/:/usr/it-project:rw -p 6900:6900 -v $$(pwd)/service-documentation:/out:rw  anzbank/sysl-catalog:v1.4.148 --serve --embed --plantuml=https://plantuml.com/plantuml ./it-project/sysl/index.sysl

proto:
	docker run --rm -v $$(pwd):/itproject:rw joshcarp/protoc $(INCLUDE) -I./itproject/proto/ --go_out=paths=source_relative:/itproject/backend/pkg/proto/itproject api.proto
	docker run --rm -v $$(pwd):/itproject:rw joshcarp/protoc $(INCLUDE) -I././itproject/proto/ --go-grpc_out=paths=source_relative:/itproject/backend/pkg/proto/itproject api.proto
	docker run --rm -v $$(pwd):/itproject:rw joshcarp/protoc $(INCLUDE) -I././itproject/proto/ --js_out=import_style=commonjs:/itproject/frontend/src/proto api.proto
	docker run --rm -v $$(pwd):/itproject:rw joshcarp/protoc $(INCLUDE) -I././itproject/proto/ --grpc-web_out=import_style=commonjs,,mode=grpcwebtext:/itproject/frontend/src/proto api.proto

docker:
	docker build . -t joshcarp/it-project -f build/Dockerfile

run:
	docker run --rm -p 443:443 joshcarp/it-project

ping:
	docker run --rm joshcarp/grpcurl -d '{"email": "Hello", "password": "123", "userid": "123" }' --plaintext host.docker.internal:$(PORT) itproject.authenticate/Register

client:
	docker build . -f build/client.Dockerfile -t joshcarp/it-project-client

client.run:
	docker run --rm -e ADDR=$(PRODADDR):$(PORT) joshcarp/it-project-client

secret:
	openssl rand -hex 64  | pbcopy

docker-compose:
	docker-compose -f build/docker-compose.yaml up
