FROM node:16-alpine3.16

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
