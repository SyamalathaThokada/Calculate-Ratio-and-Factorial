const toGetFactorial = require("../factorial/index");
const toGetRatio = require("../ratio/index");

const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = toGetRatio(num1, num2);
  const factorial = toGetFactorial(ratio, num3);
  return { ratio, factorial };
};
module.exports = ratioAndFactorial;
