const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Open Server");
});

server.listen(8000);
