// start of script.js

const questions = [
  {category: "cat0", question: "Choose a?", choices: ["a", "b", "c"], answer: "a"},
  {category: "cat1", question: "Choose b?", choices: ["a", "b", "c"], answer: "b"},
  {category: "cat2", question: "Choose c?", choices: ["a", "b", "c"], answer: "c"},
  {category: "cat3", question: "Choose b?", choices: ["a", "b", "c"], answer: "b"},
  {category: "cat4", question: "Choose a?", choices: ["a", "b", "c"], answer: "a"}
]

const getRandomQuestion = (questions) => {
  let random = Math.floor(Math.random() * questions.length);
  return questions[random];
};

const getRandomComputerChoice = (choices) => {
  let random = Math.floor(Math.random() * choices.length);
  return choices[random];
};

const question = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(question.choices);

const getResults = (question, computerChoice) => {
  if (question.answer === computerChoice) {
    return "The computer's choice is correct!";
  }
  return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
};

// end of script.js
