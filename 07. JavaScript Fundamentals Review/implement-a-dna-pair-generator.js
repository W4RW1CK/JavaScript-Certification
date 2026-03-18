// start of script.js

function pairElement (dna) {
  let chain = [];
  for(let i = 0; i < dna.length; i++) {
    dna[i] === "A" ? chain.push(["A","T"])
    : dna[i] === "T" ? chain.push(["T","A"])
    : dna[i] === "C" ? chain.push(["C","G"])
    : chain.push(["G","C"]);
  }
  return chain
}

// end of script.js
