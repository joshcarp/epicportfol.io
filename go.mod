module github.com/joshcarp/it-project

go 1.14

require (
	cloud.google.com/go v0.44.3
	firebase.google.com/go v3.13.0+incompatible
	github.com/GoogleCloudPlatform/cloudsql-proxy v0.0.0-20191009163259-e802c2cb94ae
	github.com/desertbit/timer v0.0.0-20180107155436-c41aec40b27f // indirect
	github.com/dgrijalva/jwt-go v3.2.0+incompatible
	github.com/ghodss/yaml v1.0.0
	github.com/golang/protobuf v1.4.2
	github.com/gorilla/websocket v1.4.0 // indirect
	github.com/improbable-eng/grpc-web v0.13.0
	github.com/kr/pretty v0.1.0 // indirect
	github.com/lib/pq v1.1.1 // indirect
	github.com/mwitkow/go-conntrack v0.0.0-20161129095857-cc309e4a2223 // indirect
	github.com/rs/cors v1.7.0 // indirect
	github.com/shurcooL/go v0.0.0-20200502201357-93f07166e636 // indirect
	github.com/shurcooL/go-goon v0.0.0-20170922171312-37c2f522c041 // indirect
	github.com/sirupsen/logrus v1.2.0
	github.com/spf13/afero v1.1.2
	github.com/stretchr/testify v1.5.1
	github.com/vincent-petithory/dataurl v0.0.0-20191104211930-d1553a71de50
	go.opencensus.io v0.22.2 // indirect
	golang.org/x/net v0.0.0-20200707034311-ab3426394381 // indirect
	golang.org/x/oauth2 v0.0.0-20200107190931-bf48bf16ab8d // indirect
	golang.org/x/sys v0.0.0-20200724161237-0e2f3a69832c // indirect
	golang.org/x/text v0.3.3 // indirect
	google.golang.org/appengine v1.6.5 // indirect
	google.golang.org/genproto v0.0.0-20200726014623-da3ae01ef02d // indirect
	google.golang.org/grpc v1.30.0
	google.golang.org/protobuf v1.25.0
	gopkg.in/check.v1 v1.0.0-20190902080502-41f04d3bba15 // indirect
	gopkg.in/yaml.v2 v2.3.0 // indirect
)

replace google.golang.org/grpc v1.30.0 => google.golang.org/grpc v1.29.0
