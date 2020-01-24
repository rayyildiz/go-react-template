.PHONY: clean init

init:
	go mod download
	cd  web/app && yarn 

clean:
	rm -rf .git
	touch .env

start:
	cd  web/app && yarn start 

build:
	docker build -t myApp/backend -f deployment/backend/Dockerfile .
	docker build -t myApp/frontend -f deployment/frontend/Dockerfile .