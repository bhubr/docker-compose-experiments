const http = require("http");
const app = require("./app");
const { port } = require("./settings");

const server = http.createServer(app);

server.listen(port);
