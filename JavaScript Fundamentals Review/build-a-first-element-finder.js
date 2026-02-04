// start of script.js

function findElement(arr, funct) {
  for(const array of arr) {
    if(funct(array)) {
      return array;
    }
  }
  return undefined;
}

// end of script.js
