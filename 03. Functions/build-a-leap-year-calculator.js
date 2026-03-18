// start of script.js

const isLeapYear = (year) => {
  if (year % 4 === 0) {
    if (year % 4 === 0 && year % 100 === 0) {
      if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        return `${year} is a leap year.`
      } else { 
        return `${year} is not a leap year.`
      };
    } else {
      return `${year} is a leap year.`;
    };
  } else {
    return `${year} is not a leap year.`;
  };
};

let year = 1900;

const result = isLeapYear(year);

console.log(result);

// end of script.js
