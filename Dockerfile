FROM node:20-alpine3.17

WORKDIR /app

COPY ["package.json", "yarn.lock", "/app/"]

RUN yarn install && yarn global add @nestjs/cli
