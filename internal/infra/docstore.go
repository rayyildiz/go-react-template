package infra

import (
	"context"
	"errors"
	"os"

	"gocloud.dev/docstore"
	_ "gocloud.dev/docstore/memdocstore"
	// add other docstore, more informatin: https://gocloud.dev/howto/docstore/
)

var (
	ErrDocStoreCollectionEmpty = errors.New("$DOCSTORE_COLLECTION can't be nil")
)

func NewDocStore() (*docstore.Collection, error) {

	collection := os.Getenv("DOCSTORE_COLLECTION")
	if collection == "" {
		return nil, ErrDocStoreCollectionEmpty
	}

	return docstore.OpenCollection(context.Background(), collection)
}
