const http = require("http");

// GET 요청 #1
const options = {
  hostname: "127.0.0.1",
  port: 8080,
  path: "/temp",
  method: "GET",
};

console.log("HTTP Client Start!");

// 1st GET Request for path

var req = http
  .request(options, (res) => {
    console.log("## GET request for http://127.0.0.1:8080/temp");
    console.log("## GET Response [Start]");
    res.setEncoding("utf-8");
    res.on("data", (body) => {
      console.log(body);
      console.log("## GET Response [End]");
    });
  })
  .end();

// 2nd GET Request for calculating
options.path = "/?var1=9&var2=9";

req = http
  .request(options, (res) => {
    console.log(`## GET request for http://127.0.0.1:8080/var1=9&var2=9`);
    console.log("## GET Response [Start]");
    res.setEncoding("utf-8");
    res.on("data", (body) => {
      console.log(body);
      console.log("## GET Response [End]");
    });
  })
  .end();

// 3th POST Request for calculating
options.method = "POST";
options.path = "/";

req = http.request(options, (res) => {
  console.log(
    "## POST request for http://127.0.0.1/ with var1 = 9 and var2 = 10"
  );
  console.log("## POST Response [Start]");
  res.setEncoding("utf-8");
  res.on("data", (body) => {
    console.log(body);
    console.log("## POST Response [End]");
  });
});
req.write('{"var1" : 9, "var2": 10}');
req.end();
