init:
	go mod download
	go get github.com/pilu/fresh
	cd  web/app && yarn 

start:
	fresh && cd  web/app && yarn start 

build:
	docker build -t myApp/backend -f deployment/backend/Dockerfile .
	docker build -t myApp/frontend -f deployment/frontend/Dockerfile .