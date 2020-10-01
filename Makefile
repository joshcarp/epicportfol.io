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
	docker-compose -f docker-compose.yaml up
help:               ## Show this help.
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

.PHONY: fontend
fontend:
	cd frontend && npm install && npm start
upload:
	docker run --rm joshcarp/grpcurl -d '{"name":"joshcarp.png", "content": "iVBORw0KGgoAAAANSUhEUgAAAV4AAADIAQMAAACarRuzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABlBMVEX//wD///+LefOdAAAAAWJLR0QB/wIt3gAAAAd0SU1FB+QJHgwqIzjB9dcAAAAfSURBVGje7cEBDQAAAMKg909tDwcUAAAAAAAAAAD8GyMoAAEwnDCYAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA5LTMwVDEyOjQyOjM1KzAwOjAwFI1/bQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wOS0zMFQxMjo0MjozNSswMDowMGXQx9EAAAAASUVORK5CYII="}' --plaintext host.docker.internal:443 itproject.upload/upload
uploadProfile:
	docker run --rm joshcarp/grpcurl -d '{"username":"beep","fullName":"Joshua Carpeggiani","email":"josh@joshcarp.com","picture":"https://avatars2.githubusercontent.com/u/32605850?s=460&v=4","bio":"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used before final copy is available, but it may also be used to temporarily replace copy in a process called greeking, which allows designers to consider form without the meaning of the text influencing the design.Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a first-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical, improper Latin.Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. Lorem ipsum was introduced to the digital world in the mid-1980s when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker. Other popular word processors including Pages and Microsoft Word have since adopted Lorem ipsum as well.","jobsList":[{"title":"Software engineer","dates":"2019-2020","company":"akfhdkasdaskj","description":"Beep boop whatevs"},{"title":"Memester","dates":"2009-2010","company":"akfhdkasdaskj","description":"Beep boop whatevs"},{"title":"Memester","dates":"2008-2009","company":"akfhdkasdaskj","description":"Beep boop whatevs"}],"linksList":["https://reddit.com","https://facebook.com","https://linkedin.com","https://instagram.com"],"artifactsList":[{"link":"https://picsum.photos/id/3/1200/800"},{"link":"https://picsum.photos/id/3/1200/800"},{"link":"https://picsum.photos/id/3/1200/800"},{"link":"https://picsum.photos/id/3/1200/800"}]}'  --plaintext host.docker.internal:443 itproject.profiles/updateuser
