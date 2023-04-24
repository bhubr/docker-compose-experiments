FROM node:16-alpine

WORKDIR /opt/app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn

# Copy code, migrations & db-migrate config
COPY src src
COPY migrations migrations
COPY database.json .

# Copy tests & Jest config
COPY tests tests
COPY jest.config.js .

# Add wait tool
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.11.0/wait /opt/wait
RUN chmod +x /opt/wait

CMD /opt/wait && npm run migrate-and-start