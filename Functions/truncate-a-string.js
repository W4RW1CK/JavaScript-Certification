// start of script.js

function truncateString (string, number) {
  if (string.length > number) {
    let slice = string.slice(number)
    return string.replace(slice, "...");
  } else {
    return string;
  };
};

// end of script.js
