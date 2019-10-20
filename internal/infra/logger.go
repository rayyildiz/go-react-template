package infra

import (
	"net/http"
	"os"

	"github.com/getsentry/sentry-go"
	"go.uber.org/zap"
)

func NewLogger(debug bool) *zap.Logger {
	var logger *zap.Logger
	if debug {
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

func CaptureException(request *http.Request, err error) {
	if hub := sentry.GetHubFromContext(request.Context()); hub != nil {
		hub.CaptureException(err)
	}
}
