package main

import (
	"fmt"
	"net/http"
	"os"
	"time"

	"github.com/getsentry/sentry-go"
	"github.com/go-chi/chi"
	"github.com/joho/godotenv"
	"github.com/kelseyhightower/envconfig"
	"go.uber.org/zap"
	"rayyildiz.dev/app/internal/infra" // FIXME if your change your module name in `go.mod` file, don't forget to change import
)

func init() {
	godotenv.Load()
}

func main() {
	var spec infra.Specification
	err := envconfig.Process("app", &spec)
	if err != nil {
		fmt.Printf("could not load config, %v", err)
		os.Exit(1)
	}

	log := infra.NewLogger(spec.Debug)
	defer sentry.Flush(time.Second * 5)
	db, err := infra.NewDatabase(spec.PostgresConnection)
	if err != nil {
		log.Fatal("could not initialize database", zap.Error(err))
	}
	defer db.Close()

	r := infra.NewRouter()
	port := fmt.Sprintf("%d", spec.Port)
	if port == "" {
		port = "4000"
	}

	// Handlers
	r.Route("/api", func(r chi.Router) {

	})

	log.Info("server is starting", zap.String("port", port))
	if err := http.ListenAndServe(":"+port, r); err != nil {
		log.Error("could not start server", zap.String("port", port), zap.Error(err))
	}
}
