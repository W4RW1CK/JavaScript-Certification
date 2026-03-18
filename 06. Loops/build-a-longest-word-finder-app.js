// start of script.js

 const findLongestWordLength = (sentence) => {
  const words = sentence.split(" ");
  const nums = [];

  for(let word of words) {
    nums.push(word.length)
  };

  return Math.max(...nums);
 }

// end of script.js
