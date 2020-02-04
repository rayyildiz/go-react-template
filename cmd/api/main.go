package main

import (
	"github.com/getsentry/sentry-go"
	"github.com/joho/godotenv"
	"go.rayyildiz.dev/app/internal/infra"
	"go.rayyildiz.dev/app/pkg/auth"
	"go.uber.org/zap"
	"os"
	"time"
)

func init() {
	godotenv.Load()
}

func main() {
	log := infra.NewLogger()
	defer sentry.Flush(time.Second * 5)

	e := infra.NewHttpRouter(log)

	api := e.Group("/api")

	auth.RegisterHandler(api.Group("/auth"), log)
	// register other handlers

	port := os.Getenv("PORT")
	if port == "" {
		port = "4000"
	}

	infra.InitTrace(log, e)

	log.Info("server is starting", zap.String("port", port))
	e.Logger.Fatal(e.Start(":" + port))
}
