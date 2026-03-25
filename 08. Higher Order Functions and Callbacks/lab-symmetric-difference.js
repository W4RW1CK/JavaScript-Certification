// start of script.js

const diffArray = (arr0, arr1) => {
  const element0 = arr0.filter(item => !arr1.includes(item));
  const element1 = arr1.filter(item => !arr0.includes(item));
  const newArr = [...element0, ...element1];
  return newArr;
};

// end of script.js
