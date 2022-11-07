const http = require("http");

const server = http.createServer((req, res) => {
  // Basic Client Information
  console.log("::Client Address : %s", req.socket.address().address);
  console.log("::Client Port : %s", req.socket.address().port);

  console.log("::Request Version : HTTP/%s", req.httpVersion);
  console.log("::Request Path : %s", req.url);
  console.log(":: Request Command : %s", req.method);
});

server.listen(8080, (req, res) => {
  console.log("HTTP server started at http://localhost:8080");
});

// GET Method
