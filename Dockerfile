FROM node:14-alpine

RUN apk --no-cache add curl

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY src/ src/

CMD [ "npm", "run", "start" ]
