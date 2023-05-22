FROM node:16-alpine3.16
RUN mkdir -p /usr/src/node_api_espress
WORKDIR /usr/src/node_api_espress
COPY package.json /usr/src/node_api_espress/
RUN npm install
COPY . /usr/src/node_api_espress
EXPOSE 8080
CMD [ "npm", "start" ]
