// start of script.js

function frankenSplice(firstArr, secondArr, index) {
  let a = [];

  for(const arrOne of secondArr.slice(0, index)) {
    a.push(arrOne)
  }
  for(const arr of firstArr.slice()) {
    a.push(arr)
  }
  for(const arrTwo of secondArr.slice(index)) {
    a.push(arrTwo)
  }

  return a;
}

// end of script.js
