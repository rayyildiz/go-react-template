package infra

import (
	"github.com/getsentry/sentry-go"
	"go.uber.org/zap"
	"os"
)

func NewLogger() *zap.Logger {
	var logger *zap.Logger
	if os.Getenv("DEBUG") == "true" {
		logger, _ = zap.NewDevelopment()
	} else {
		logger, _ = zap.NewProduction()
	}

	initializeSentry(logger)

	return logger
}

func initializeSentry(log *zap.Logger) {
	if dsn := os.Getenv("SENTRY_DSN"); len(dsn) > 5 {
		err := sentry.Init(sentry.ClientOptions{
			Dsn:     dsn,
			Release: os.Getenv("SENTRY_RELEASE"),
			Dist:    os.Getenv("SENTRY_ENVIRONMENT"),
		})
		if err != nil {
			log.Error("could not initialize sentry", zap.Error(err))
		}
	}
}
