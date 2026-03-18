// start of script.js

const maskEmail = (email) => {
  const mask = "*";
  let atSymbol = email.indexOf("@");
  const maskText = email.slice(1, --atSymbol);
  return email.replace(maskText, mask.repeat(--atSymbol));
};
const email = "ajldajldad@adafd.com";

console.log(maskEmail(email));

// end of script.js

