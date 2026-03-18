// start of script.js

const confirmEnding = (string, string2) => {
  let str2 = string2.length;
  let slice = string.slice(-str2);
  if (slice === string2) {
    return true;
  } else {
    return false;
  }
}

// end of script.js
