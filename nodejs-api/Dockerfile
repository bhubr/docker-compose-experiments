FROM node:16-alpine

WORKDIR /opt/app

COPY package.json yarn.lock .

RUN yarn

COPY src src
COPY migrations migrations
COPY database.json .

CMD npm run migrate-and-start