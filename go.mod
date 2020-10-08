module github.com/joshcarp/it-project

go 1.14

require (
	cloud.google.com/go v0.44.3
	github.com/GoogleCloudPlatform/cloudsql-proxy v0.0.0-20191009163259-e802c2cb94ae
	github.com/desertbit/timer v0.0.0-20180107155436-c41aec40b27f // indirect
	github.com/dgrijalva/jwt-go v3.2.0+incompatible
	github.com/ghodss/yaml v1.0.0
	github.com/go-sql-driver/mysql v1.5.0 // indirect
	github.com/golang/protobuf v1.4.2
	github.com/improbable-eng/grpc-web v0.13.0
	github.com/jmoiron/sqlx v1.2.0
	github.com/lib/pq v1.1.1
	github.com/mattn/go-sqlite3 v1.14.0 // indirect
	github.com/onsi/ginkgo v1.14.1 // indirect
	github.com/onsi/gomega v1.10.2 // indirect
	github.com/pkg/errors v0.8.0
	github.com/proullon/ramsql v0.0.0-20181213202341-817cee58a244
	github.com/rs/cors v1.7.0 // indirect
	github.com/sirupsen/logrus v1.2.0
	github.com/spf13/afero v1.1.2
	github.com/spf13/viper v1.4.0
	github.com/stretchr/testify v1.5.1
	github.com/ziutek/mymysql v1.5.4 // indirect
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
	grpc.go4.org v0.0.0-20170609214715-11d0a25b4919
)

replace google.golang.org/grpc v1.30.0 => google.golang.org/grpc v1.29.0
