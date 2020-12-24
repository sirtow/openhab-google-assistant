FROM node:12-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

RUN cd functions && npm install

EXPOSE 3000
CMD [ "node", "testServer.js" ]