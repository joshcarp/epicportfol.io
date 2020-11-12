module github.com/joshcarp/it-project

go 1.14

require (
	cloud.google.com/go v0.72.0
	cloud.google.com/go/firestore v1.3.0
	cloud.google.com/go/storage v1.10.0
	firebase.google.com/go v3.13.0+incompatible
	github.com/GoogleCloudPlatform/cloudsql-proxy v0.0.0-20191009163259-e802c2cb94ae
	github.com/desertbit/timer v0.0.0-20180107155436-c41aec40b27f // indirect
	github.com/dgrijalva/jwt-go v3.2.0+incompatible
	github.com/ghodss/yaml v1.0.0
	github.com/golang/protobuf v1.4.3
	github.com/gorilla/websocket v1.4.0 // indirect
	github.com/improbable-eng/grpc-web v0.13.0
	github.com/lib/pq v1.1.1 // indirect
	github.com/mwitkow/go-conntrack v0.0.0-20161129095857-cc309e4a2223 // indirect
	github.com/rs/cors v1.7.0 // indirect
	github.com/sirupsen/logrus v1.2.0
	github.com/spf13/afero v1.1.2
	github.com/stretchr/testify v1.5.1
	github.com/vincent-petithory/dataurl v0.0.0-20191104211930-d1553a71de50
	google.golang.org/genproto v0.0.0-20201109203340-2640f1f9cdfb
	google.golang.org/grpc v1.33.2
	google.golang.org/protobuf v1.25.0
	gopkg.in/check.v1 v1.0.0-20190902080502-41f04d3bba15 // indirect
	gopkg.in/yaml.v2 v2.3.0 // indirect
)

replace google.golang.org/grpc v1.30.0 => google.golang.org/grpc v1.29.0
