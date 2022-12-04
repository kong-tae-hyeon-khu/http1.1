const http = require("http");
const { parse } = require("querystring");
const { URLSearchParams } = require("url");

const test = require("./method");

const server = http.createServer((req, res) => {
  // GET Method
  if (req.method === "GET") {
    if (req.url.includes("?")) {
      // Basic Client Request Information
      test.basic_info(req);

      var calculated = req.url.split("?")[1];
      console.log("## GET response [Start] for Calculation");
      var result = test.method_for_get(calculated);
      console.log(result);

      res.end(result);
      console.log("## GET response [End] for Calculation");
    } else if (req.url !== "/favicon.ico") {
      // Basic Client Request Information
      test.basic_info(req);
    }
    // POST Method
  } else if (req.method === "POST") {
    // Basic Client Request Information
    test.basic_info(req);

    request_body = "";
    req.on("data", (request_client) => {
      request_body += request_client;
      test.method_for_post(request_body);
    });
  }
});

server.listen(8080, (req, res) => {
  console.log("HTTP server started at http://localhost:8080");
});
