init:
	go mod download
	go get github.com/pilu/fresh
	cd  web/app && yarn 

clean:
	rm -rf .git
	tocuh .env

start_frontend:
	cd  web/app && yarn start 

start_backend:
	fresh

build:
	docker build -t myApp/backend -f deployment/backend/Dockerfile .
	docker build -t myApp/frontend -f deployment/frontend/Dockerfile .