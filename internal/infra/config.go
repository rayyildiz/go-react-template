package infra

type Specification struct {
	Debug              bool
	Port               int    `default:"4000"`
	PostgresConnection string `envconfig:"POSTGRES_CONNECTION"`
	DocStore           string `envconfig:"DOC_STORE"`
}
