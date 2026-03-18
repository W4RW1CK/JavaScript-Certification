// start of script.js

function convertHTML(str) {
  let caracteres = str.split("");

  for (let i = 0; i < str.length; i++) {
    switch (caracteres[i]) {
      case "&":
        caracteres[i] = "&amp;";
        break;
      case "<":
        caracteres[i] = "&lt;";
        break;
      case ">":
        caracteres[i] = "&gt;";
        break;
      case '"':
        caracteres[i] = "&quot;";
        break;
      case "'":
        caracteres[i] = "&apos;";
        break;
    }
  }

  return caracteres.join("");
}

convertHTML("Dolce & Gabbana")



// end of script.js
