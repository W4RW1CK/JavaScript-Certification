// start of script.js

let count = 0;
const cardCounter = (card) => {
  if (card > 1 && card <= 6) {
    ++count;
  } else if (card >= 7 && card <= 9) {
    count;
  } else if ( card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
    --count;
  };

  if(count >= 1) {
    return `${count} Bet`
  } else {
    return `${count} Hold`
  };
}

// end of script.js
