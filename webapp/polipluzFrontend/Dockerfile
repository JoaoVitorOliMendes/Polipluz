FROM node:14.15-alpine AS builder

WORKDIR /opt/web
COPY package.json ./
RUN npm install

COPY . /opt/web/
RUN npm run build

FROM nginx:1.17-alpine
COPY nginx.config /etc/nginx/conf.d/default.conf
COPY --from=builder /opt/web/dist/notes /usr/share/nginx/html
EXPOSE 80