// start of script.js

let inventory = [];

function findProductIndex(productName) {
  const lowerCaseName = productName.toLowerCase();
  
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === lowerCaseName) {
      return i;
    }
  }
  
  return -1;
}

function addProduct(productObject) {
  const lowerCaseName = productObject.name.toLowerCase();
  const index = findProductIndex(lowerCaseName);

  if (index !== -1) {
    inventory[index].quantity += productObject.quantity;
    console.log(`${lowerCaseName} quantity updated`);
    return;
  } else {
    inventory.push({ name: lowerCaseName, quantity: productObject.quantity });
    console.log(`${lowerCaseName} added to inventory`)
    return;
  }
  
}

function removeProduct(productName, quantity) {
  const lowerCaseName = productName.toLowerCase();
  const index = findProductIndex(lowerCaseName);
  
  if (index === -1) {
    console.log(`${lowerCaseName} not found`);
    return;
  }
  
  if (inventory[index].quantity < quantity) {
    console.log(`Not enough ${lowerCaseName} available, remaining pieces: ${inventory[index].quantity}`);
    return;
  } else {
    inventory[index].quantity -= quantity;
    console.log(`Remaining ${lowerCaseName} pieces: ${inventory[index].quantity}`);

    if (inventory[index].quantity === 0) {
      inventory.splice(index, 1);
      return;
    }
    return;
  }
}

// end of script.js
