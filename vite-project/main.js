import "./style.css";
import { questions } from "./array.js";

const DOMSelectors = {
  emojiDisplay: document.getElementById("picture-display"),
  userInput: document.getElementById("userInput"),
  form: document.getElementById("answer-box"),
  score: document.getElementById("score-number"),
};

let score = 0;
let index = 0;
console.log(index);
let emojiQ = questions[index].emojis;
let answer = questions[index].answer;

function start() {
  next();
  checkAnswer();
  questions.splice(emojiQ, 1);
}
start();

function genQ() {
  DOMSelectors.emojiDisplay.insertAdjacentHTML(
    "afterbegin",
    `
    <p id="emojis">${emojiQ}</p>
    `
  );
}

//if (user input === answer) , score ++

function checkAnswer() {
  const userInput = DOMSelectors.userInput.value;
  console.log(userInput);

  if (userInput === answer) {
    score++;
    console.log("correct!");
  } else if (userInput === "") {
    console.log("nothing");
  } else {
    console.log("wrong");
  }

  console.log(score);
}

function next() {
  DOMSelectors.userInput.value = "";
  DOMSelectors.emojiDisplay.innerHTML = "";
  index++;
  genQ();
}

function updateScore() {
  DOMSelectors.score.textContent = `${score}`;
}

DOMSelectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkAnswer();
  next();
  updateScore();
});
