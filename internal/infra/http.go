package infra

import (
	"time"

	sentryHttp "github.com/getsentry/sentry-go/http"
	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
)

func NewRouter() *chi.Mux {
	r := chi.NewRouter()

	logHandler := sentryHttp.New(sentryHttp.Options{
		Repanic:         false,
		WaitForDelivery: false,
		Timeout:         5,
	})

	r.Use(middleware.RequestID)
	r.Use(middleware.RealIP)
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	r.Use(middleware.Timeout(30 * time.Second))
	r.Use(middleware.Heartbeat("/health"))
	r.Use(middleware.Compress(6))
	r.Use(logHandler.Handle)

	return r
}
