const http = require("http");
const api = require("./api.js");
const PORT = 8000;

const server = http
  .createServer(api.handler)
  .listen(PORT, () => console.log(`Server listening on ${PORT}`));

module.exports = server;
