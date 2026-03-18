// start of script.js

const num = 17;

const factorialCalculator = (num) => {
  let test = 1;
  let result = 1;

  while (test !== num) {
    result += test * result;
    ++test;
  };
  
  return result;
};

const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);

// end of script.js
