// start of script.js

const lunches = [];

function addLunchToEnd(lunches, string) {
  lunches.push(string);
  console.log(`${string} added to the end of the lunch menu.`);
  return lunches;
};

function addLunchToStart(lunches, string) {
  lunches.unshift(string);
  console.log(`${string} added to the start of the lunch menu.`);
  return lunches;
};

function removeLastLunch(lunches) {
  let removed = lunches.pop();
  if (lunches.length !== 0) {
    console.log(`${removed} removed from the end of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return lunches;
};

function removeFirstLunch(lunches) {
  let removed = lunches.shift();
  if (lunches.length !== 0) {
    console.log(`${removed} removed from the start of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return lunches;
};

function getRandomLunch(lunches) {
  let random = Math.round(Math.random() * (lunches.length));
  if (lunches.length !== 0) {
    console.log(`Randomly selected lunch: ${lunches[random]}`)
  } else {
    console.log("No lunches available.")
  };
};

function showLunchMenu(lunches) {
  if (lunches.length !== 0) {
    console.log(`Menu items: ${lunches.join(", ")}`)
  } else {
    console.log("The menu is empty.")
  };
};

showLunchMenu(["Greens", "Corns", "Beans"]);

// end of script.js
