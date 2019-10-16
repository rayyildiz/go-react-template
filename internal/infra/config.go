package infra

type Specification struct {
	Debug              bool
	Port               int    `default:"4000"`
	PostgresConenction string `envconfig:"POSTGRES_CONNECTION"`
	DocStore           string `envconfig:"DOC_STORE"`
}
