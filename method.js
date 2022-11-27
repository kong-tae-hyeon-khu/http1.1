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

module.exports.method_for_get = method_for_get;
