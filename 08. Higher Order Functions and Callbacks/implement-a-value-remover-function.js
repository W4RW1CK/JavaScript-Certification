** start of script.js **

const destroyer = (arr, ...rest) => {
  return arr.filter(element => !rest.includes(element))
};

** end of script.js **

