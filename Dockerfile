FROM node:16-alpine3.14

WORKDIR /app

COPY package.json /app

RUN npm i -g @nestjs/cli && npm i -g @nestjs/core && npm i -g @nestjs/common

RUN npm install

COPY . /app
