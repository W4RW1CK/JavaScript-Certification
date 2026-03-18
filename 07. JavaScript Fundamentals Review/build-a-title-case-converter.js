// start of script.js

const titleCase = (phrase) => {
  let phraseArr = [];
  let phraseStr = "";

  for(const i of phrase.toLowerCase().split(" ")) {
    phraseArr.push(i.replace(i[0], i[0].toUpperCase()));
  }

  phraseStr += phraseArr.join(" ");
  return phraseStr;
}

// end of script.js

