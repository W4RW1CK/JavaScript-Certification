// start of script.js

const mutation = (arr) => {
  let str0 = arr[0].toLowerCase();
  let str1 = arr[1].toLowerCase();

  let counter = [];

  for (const str of str1) {
    if(str0.includes(str)) {
      counter.push(true);
    } else {
      counter.push(false);
    };
  };

  if (counter.includes(false)) {
    return false;
  };

  return true;
};

// end of script.js
