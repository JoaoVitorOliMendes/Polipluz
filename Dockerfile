FROM maven:3.8.4-openjdk-11-slim as BUILDER

ARG VERSION=0.0.1-SNAPSHOT

WORKDIR /app/backend

COPY . .
RUN mvn clean install

CMD mvn spring-boot:run