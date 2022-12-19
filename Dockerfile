FROM node:16-alpine3.14

WORKDIR /app

COPY ["package.json", "yarn.lock", "/app/"]

RUN yarn global add @nestjs/cli

