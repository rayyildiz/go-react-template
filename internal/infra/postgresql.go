package infra

import (
	"database/sql"
	"errors"
	_ "github.com/lib/pq"
)

func NewDatabase(connStr string) (*sql.DB, error) {
	if connStr == "" {
		return nil, errors.New("please provide a db connection string")
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
