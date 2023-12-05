FROM node:20-alpine3.17

WORKDIR /app

COPY ["package.json", "/app/"]

RUN yarn global add @nestjs/cli
