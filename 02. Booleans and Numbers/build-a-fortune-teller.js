// start of script.js

const fortune1 = "Your cat will look very cuddly today.";
const fortune2 = "The weather will be nice tomorrow.";
const fortune3 = "Be cautious of your new neighbors.";
const fortune4 = "You will find a new hobby soon.";
const fortune5 = "It would be wise to avoid the color red today.";

let randomNumber = Math.round(Math.random() * 5 + 1);

let selectedFortune =
randomNumber === 1
? fortune1
: randomNumber === 2
? fortune2
: randomNumber === 3
? fortune3
: randomNumber === 4
? fortune4
: fortune5;

console.log(selectedFortune);

// end of script.js

