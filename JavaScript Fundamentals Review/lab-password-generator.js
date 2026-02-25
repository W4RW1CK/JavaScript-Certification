// start of script.js

const generatePassword = (size) => {
  let pass = "";
  const options = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  for (let i = 1; i <= size; i++) {
    let num = Math.round(Math.random() * options.length);
    pass += options[num];
  }
  return pass;
}

let password = generatePassword(8);
console.log(`Generated password: ${password}`);

// end of script.js

