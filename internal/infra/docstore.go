package infra

import (
	"context"
	"errors"

	"gocloud.dev/docstore"
	_ "gocloud.dev/docstore/memdocstore" // in-mem doctsore
	// add other docstore, more informatin: https://gocloud.dev/howto/docstore/
)

var (
	ErrDocStoreCollectionEmpty = errors.New("$DOCSTORE_COLLECTION can't be nil")
)

func NewDocStore(collection string) (*docstore.Collection, error) {
	if collection == "" {
		return nil, ErrDocStoreCollectionEmpty
	}

	return docstore.OpenCollection(context.Background(), collection)
}
