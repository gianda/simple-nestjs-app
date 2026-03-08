FROM node:25-alpine3.23

WORKDIR /app

COPY ["package.json", "yarn.lock", "/app/"]

RUN npm install -g yarn@latest --force && yarn install
