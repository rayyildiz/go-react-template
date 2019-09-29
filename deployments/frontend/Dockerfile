FROM node:10 as builder

WORKDIR /source

ADD ./web/app/package.json .
ADD ./web/app/yarn.lock .
RUN yarn

ADD ./web/app .

RUN yarn build

FROM nginx:alpine

COPY --from=builder /source/build/ /usr/share/nginx/html
#COPY ./web/app/build/ /usr/share/nginx/html
COPY ./deployments/frontend/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
