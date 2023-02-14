import "./style.css";
import { questions } from "./array.js";

const DOMSelectors = {
  emojiDisplay: document.getElementById("picture-display"),
  userInput: document.getElementById("userInput"),
  form: document.getElementById("answer-box"),
  score: document.getElementById("score-number"),
};

/* function HTML(emojis) {
  DOMSelectors.emojiDisplay.insertAdjacentHTML(
    "afterbegin",
    `
<img src="${emojis.img}" class="img"/>
  `
  );
}
 */
/* function score() {
  let score = 0;
  score++;
  console.log(score);
}
score();
 */

let score = 0;
let question = Math.floor(Math.random() * questions.length);
let emojiQ = questions[question].emojis;
let answer = questions[question].answer;

function start() {
  next();
  //genQ();
  checkAnswer();
  questions.splice(question, 1);
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
  } else {
    console.log("wrong");
  }
  console.log(score);
}

function next() {
  DOMSelectors.userInput.value = "";
  DOMSelectors.emojiDisplay.innerHTML = "";
  genQ();
  question.forEach((e) =>
    DOMSelectors.emojiDisplay.insertAdjacentHTML("afterbegin", ``)
  );
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
