FROM node:16-alpine

WORKDIR /opt/app

COPY package.json yarn.lock .

RUN yarn

COPY src src
COPY public public
COPY index.html vite.config.js .

CMD yarn dev --host