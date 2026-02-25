// start of script.js

const uniteUnique = (...args) => {
  let arr = [];
  for (const arg of args) {
    for(const value of arg) {
      if(arr.includes(value) === false) {
        arr.push(value)
      }
    }
  }
  return arr;
}

// end of script.js
