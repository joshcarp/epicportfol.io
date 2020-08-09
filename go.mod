module github.com/joshcarp/it-project

go 1.14

require (
	github.com/GoogleCloudPlatform/cloudsql-proxy v0.0.0-20191009163259-e802c2cb94ae
	github.com/fullstorydev/grpcui v1.0.0 // indirect
	github.com/golang/protobuf v1.4.2
	github.com/grpc-ecosystem/grpc-gateway v1.14.6
	golang.org/x/net v0.0.0-20200707034311-ab3426394381 // indirect
	golang.org/x/sys v0.0.0-20200724161237-0e2f3a69832c // indirect
	golang.org/x/text v0.3.3 // indirect
	google.golang.org/genproto v0.0.0-20200726014623-da3ae01ef02d
	google.golang.org/grpc v1.30.0
	google.golang.org/protobuf v1.25.0
)

replace google.golang.org/grpc v1.30.0 => google.golang.org/grpc v1.29.0
