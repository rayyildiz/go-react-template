package infra

import (
	"database/sql"
	"errors"
	_ "github.com/lib/pq"
	"os"
)

func NewDatabase() (*sql.DB, error) {
	connStr := os.Getenv("POSTGRES_CONNECTION")
	if connStr == "" {
		return nil, errors.New("please provide system env variables: POSTGRES_CONNECTION_STRING")
	}

	// postgres://postgres:123456@localhost/postgres?sslmode=disable

	db, err := sql.Open("postgres", connStr)
	if err != nil {
		return nil, err
	}

	db.SetMaxIdleConns(10)
	db.SetMaxOpenConns(4)

	err = db.Ping()
	return db, err
}
