// start of script.js

function sumFibs (num) {
  let num0 = 0;
  let num1 = 1;
  let sum = 0;

  while(num0 <= num) {
      num0 = num0 + num1;
      num1 = num0 - num1;
      if(num0 % 2 !== 0 && num0 <= num) {
        sum += num0;
      }
  }

  return sum;
}

// end of script.js
