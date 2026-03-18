// start of script.js

const largestOfAll = (array) => {
  let largest = [];
  for(const arrOne of array) {
    
    largest.push(Math.max(...arrOne));
  }
  return largest
}

// end of script.js
