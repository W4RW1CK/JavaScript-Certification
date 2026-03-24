// start of script.js

const getIndexToIns = (array, number) => {
  const sortMethod = (a, b) => a - b;
  const findIndexMethod = (a) => a >= number;

  const sortedArray = array.sort(sortMethod);
  const index = sortedArray.findIndex(findIndexMethod);

  return index === -1 ? sortedArray.length : index;
}

// end of script.js
