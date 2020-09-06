all:proto
PRODADDR=joshcarp-it-project-ogaheemccq-uc.a.run.app
PORT=443
INCLUDE=-I/go/src/github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis
.PHONY: proto proto-docker

docs: sysl          ## Make sysl documentation
	rm -rf service-documentation/ || true
	mkdir service-documentation
	docker run --rm -v $$(pwd)/:/usr/it-project:rw -v $$(pwd)/service-documentation:/out:rw  anzbank/sysl-catalog:v1.4.148 --embed --outputFileName={{.Title}}.md --plantuml=https://plantuml.com/plantuml --templates=it-project/sysl/templates/project.tmpl,it-project/sysl/templates/package.tmpl ./it-project/sysl/index.sysl
docs.preview: sysl  ## Preview service documentation
	docker run --rm -v $$(pwd)/:/usr/it-project:rw -p 6900:6900 -v $$(pwd)/service-documentation:/out:rw  anzbank/sysl-catalog:v1.4.148 --serve --embed --plantuml=https://plantuml.com/plantuml ./it-project/sysl/index.sysl

proto:              ## Remake the proto generation
	docker run --rm -v $$(pwd):/itproject:rw joshcarp/protoc $(INCLUDE) -I./itproject/proto/ --go_out=paths=source_relative:/itproject/backend/pkg/proto/itproject api.proto
	docker run --rm -v $$(pwd):/itproject:rw joshcarp/protoc $(INCLUDE) -I././itproject/proto/ --go-grpc_out=paths=source_relative:/itproject/backend/pkg/proto/itproject api.proto
	docker run --rm -v $$(pwd):/itproject:rw joshcarp/protoc $(INCLUDE) -I././itproject/proto/ --js_out=import_style=commonjs:/itproject/frontend/src/proto api.proto
	docker run --rm -v $$(pwd):/itproject:rw joshcarp/protoc $(INCLUDE) -I././itproject/proto/ --grpc-web_out=import_style=commonjs,,mode=grpcwebtext:/itproject/frontend/src/proto api.proto
	docker run --rm -v $$(pwd):/itproject:rw anzbank/protoc-gen-sysl:v0.0.20 $(INCLUDE) -I./itproject/proto/ --sysl_out=/itproject/sysl/generated/ api.proto
	printf '%s\n%s\n' "/* eslint-disable */" "$$(cat ./frontend/src/proto/api_pb.js)" > ./frontend/src/proto/api_pb.js

docker:             ## Build the authentication service
	docker build . -t joshcarp/it-project -f build/Dockerfile

run:                ## Run docker
	docker run --rm -p 443:443 joshcarp/it-project

ping:               ## Ping the authentication service
	docker run --rm joshcarp/grpcurl -d '{"email": "Hello", "password": "123", "userid": "123" }' --plaintext host.docker.internal:$(PORT) itproject.authenticate/Register

client:             ## Make the demo client
	docker build . -f build/client.Dockerfile -t joshcarp/it-project-client

client.run:         ## Run the demo client in docker
	docker run --rm -e ADDR=host.docker.internal:443 joshcarp/it-project-client

secret:             ## Remake a jwt secret
	openssl rand -hex 64  | pbcopy

docker-compose:     ## Run all the services in build/docker-compose.yaml
	docker-compose -f build/docker-compose.yaml up
help:               ## Show this help.
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

.PHONY: fontend
fontend:
	cd frontend && npm install && npm start
