FROM golang:1.13 as builder

RUN apt-get update -y && \
    apt-get install upx-ucl -y

WORKDIR /source

ADD go.mod .
ADD go.sum .
RUN go mod download

ADD . .
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o app main.go
RUN upx app

FROM drone/ca-certs

COPY --from=builder /source/app /app

CMD ["/app"]
