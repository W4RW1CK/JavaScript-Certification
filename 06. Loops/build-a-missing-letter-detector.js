// start of script.js

const abc = "abcdefghijklmnopqrstuvwxyz"

const fearNotLetter = (string) => {
  let first = string[0];
  let last = string.slice(-1);

  let abcFirst = abc.indexOf(first);
  let abcLast = abc.indexOf(last);

  let fullString = abc.slice(abcFirst, abcLast + 1);

  for(const cut of fullString) {
    if(!string.includes(cut)) {
      return cut
    }
  }
}

// end of script.js
