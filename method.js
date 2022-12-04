// 곱하기 연산을 위한 GET Method 를 위한 함수.
const method_for_get = (parameter) => {
  try {
    const urlParams = new URLSearchParams(parameter);

    const var1 = urlParams.get("var1");
    const var2 = urlParams.get("var2");

    const multiple_result = var1 * var2;

    const result = `## GET request for calculation => ${var1} x ${var2} = ${multiple_result}`;

    return result;
  } catch (error) {
    console.log(`오류 내용 : ${error}`);
  }
};
// Client 의 정보를 표현하도록 해주는 함수 작성.
const basic_info = (req) => {
  console.log("::Client Address : %s", req.socket.address().address);
  console.log("::Client Port : %s", req.socket.address().port);

  console.log("::Request Version : HTTP/%s", req.httpVersion);
  console.log("::Request Path : %s", req.url);
  console.log(":: Request Command : %s", req.method);
};

const method_for_post = (request_body) => {
  request_body = JSON.parse(request_body);

  var1 = request_body.var1;
  var2 = request_body.var2;
  result = var1 * var2;
  console.log(`## POST request data => var1=${var1}&var2=${var2}`);
  console.log(
    `## POST request for calculation => ${var1} x ${var2} = ${result}`
  );
};

module.exports.basic_info = basic_info;
module.exports.method_for_get = method_for_get;
module.exports.method_for_post = method_for_post;
