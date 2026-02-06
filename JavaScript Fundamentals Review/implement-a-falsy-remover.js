// start of script.js

function bouncer(array) {
  let newArray = [];
  for(const arr of array) {
    if (!arr === false | !arr === null | !arr === 0 | !arr === "" | !arr === undefined | !arr === NaN) {
      newArray.push(arr);
    }
  }
  return newArray;
}

// end of script.js

