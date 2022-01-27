FROM node:14.15-alpine AS builder

WORKDIR /app
COPY package.json /app
RUN npm install

COPY . .
RUN npm run build

FROM nginx:1.17-alpine
VOLUME /var/cache/nginx
COPY ./nginx.config /wtc/nginx/conf.d/default.conf
COPY --from=builder app/dist/polipluzFrontend /usr/share/nginx/html