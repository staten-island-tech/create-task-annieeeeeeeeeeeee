import "./style.css";
import { questions } from "./array.js";

const DOMSelectors = {
  emojiDisplay: document.getElementById("picture-display"),
  userInput: document.getElementById("userInput"),
  form: document.getElementById("answer-box"),
  score: document.getElementById("score-number"),
  results: document.getElementById("results"),
  //test: document.getElementById("hi"),
};

let score = 0;
let index = 0;
let emojiQ = questions[index].emojis;
let answer = questions[index].answer;

function start() {
  //next();
  displayQuestion();

  //questions.splice(emojiQ, 1);
}
start();

//displays question
function displayQuestion() {
  DOMSelectors.emojiDisplay.insertAdjacentHTML(
    "afterbegin",
    `
    <p id="emojis">${emojiQ}</p>
    `
  );
}

//if (user input === answer) , score ++
//check answer if the user gets the question right, add one to the score
function checkAnswer() {
  const userInput = DOMSelectors.userInput.value;
  if (userInput === answer) {
    score++;
    DOMSelectors.results.innerHTML = "Correct!";
    console.log("correct!");
  } else if (userInput === "") {
    console.log("nothing");
  } else {
    console.log("wrong");
  }

  console.log(score);
}

/* function next() {
  DOMSelectors.userInput.value = "";
  DOMSelectors.emojiDisplay.innerHTML = "";
  //genQ();
} */

function updateScore() {
  DOMSelectors.score.textContent = `${score}`;
}

DOMSelectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
  //displayQuestion();
  checkAnswer();
  updateScore();
});
