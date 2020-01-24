package infra

import (
	"fmt"
	"github.com/labstack/echo/v4"
	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
	"time"

	"contrib.go.opencensus.io/exporter/stackdriver"
	"go.opencensus.io/plugin/ochttp"
	"go.opencensus.io/trace"

	"os"
)

func NewLogger() *zap.Logger {
	logger, err := zap.NewProductionConfig().Build()
	if err != nil {
		fmt.Printf("Coudl not create zap logger, %v\n", err)
		return nil
	}
	return logger
}

func InitTrace(log *zap.Logger, e *echo.Echo) {
	projectId := os.Getenv("PROJECT_ID")

	if os.Getenv("TRACE_ENABLED") == "true" && len(projectId) > 0 {
		log.Info("opencensus is enabled")
		exporter, err := stackdriver.NewExporter(stackdriver.Options{
			ProjectID: projectId,
		})
		if err == nil {
			trace.RegisterExporter(exporter)
		} else {
			log.Error("infra:InitTrace", zap.Error(err))
		}
		trace.ApplyConfig(trace.Config{DefaultSampler: trace.AlwaysSample()})

		e.Use(newCensus())

		var ocHandler = &ochttp.Handler{Handler: e, IsPublicEndpoint: true}
		e.Server.Handler = ocHandler
	}
}

func zapLogger(log *zap.Logger) echo.MiddlewareFunc {
	return func(next echo.HandlerFunc) echo.HandlerFunc {
		return func(c echo.Context) error {
			start := time.Now()

			err := next(c)
			if err != nil {
				c.Error(err)
			}

			req := c.Request()
			res := c.Response()

			id := req.Header.Get(echo.HeaderXRequestID)
			if id == "" {
				id = res.Header().Get(echo.HeaderXRequestID)
			}

			fields := []zapcore.Field{
				zap.Int("status", res.Status),
				zap.String("latency", time.Since(start).String()),
				zap.String("id", id),
				zap.String("method", req.Method),
				zap.String("uri", req.RequestURI),
				zap.String("host", req.Host),
				zap.String("remote_ip", c.RealIP()),
			}
			if err != nil {
				fields = append(fields, zap.Error(err))
			}

			n := res.Status
			switch {
			case n >= 500:
				log.Error("Server error", fields...)
			case n >= 400:
				log.Warn("Client error", fields...)
			case n >= 300:
				log.Info("Redirection", fields...)
			default:
				log.Info("Success", fields...)
			}

			return nil
		}
	}
}
