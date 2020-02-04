package main

import (
	"github.com/getsentry/sentry-go"
	"github.com/joho/godotenv"
	"go.rayyildiz.dev/app/internal/infra"
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

	port := os.Getenv("PORT")
	if port == "" {
		port = "4200"
	}

	infra.InitTrace(log, e)

	log.Info("server is starting", zap.String("port", port))
	e.Logger.Fatal(e.Start(":" + port))
}
