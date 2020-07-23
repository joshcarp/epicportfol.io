# it-project
COMP30022 IT project for semester 2 2020

## Requirements
- Docker

## Build the server
`make build`
- This will build the current project in docker `joshcarp/it-project`
## Start the server
`make run`
- This will run a docker container of the image on localhost:50051
## Ping the server
`make ping`
- This will run grpcurl on the `itProject/Hello` service and print the response
```bash
docker run --rm joshcarp/grpcurl --plaintext host.docker.internal:50051 itproject.itProject/Hello
{
  "Content": "Hello World"
}
```
## Build the proto specifications
`make proto`
- This will rebuild the proto generated code in proto/it-project
