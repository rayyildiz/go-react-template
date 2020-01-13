package infra

import (
	"github.com/getsentry/sentry-go"
	sentryecho "github.com/getsentry/sentry-go/echo"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"go.opencensus.io/plugin/ochttp"
	"go.uber.org/zap"
	"net/http"
	"os"
)

func NewHttpRouter(log *zap.Logger) *echo.Echo {
	e := echo.New()
	e.HideBanner = true

	e.Use(middleware.Recover())
	e.Use(middleware.RequestID())
	e.Use(zapLogger(log))
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{
			"http://localhost:3000",
		},
		AllowMethods: []string{http.MethodOptions, http.MethodHead, http.MethodPost, http.MethodGet},
	}))

	dsn := os.Getenv("SENTRY_DSN")
	if len(dsn) > 0 {
		err := sentry.Init(sentry.ClientOptions{
			Dsn:         dsn,
			Environment: "prod",
		})
		if err != nil {
			log.Error("infra.NewHttpRouter, sentry-init", zap.Error(err))
		}

		e.Use(sentryecho.New(sentryecho.Options{}))
	}

	return e
}

func newCensus() echo.MiddlewareFunc {
	return func(next echo.HandlerFunc) echo.HandlerFunc {
		return func(c echo.Context) (err error) {
			handler := &ochttp.Handler{
				Handler: http.HandlerFunc(
					func(w http.ResponseWriter, r *http.Request) {
						c.SetRequest(r)
						c.SetResponse(echo.NewResponse(w, c.Echo()))
						err = next(c)
					},
				),
			}
			handler.ServeHTTP(c.Response(), c.Request())
			return
		}
	}
}
