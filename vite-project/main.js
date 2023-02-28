import "./style.css";
import { questions } from "./array.js";

const DOMSelectors = {
  emojiDisplay: document.getElementById("picture-display"),
  userInput: document.getElementById("userInput"),
  form: document.getElementById("answer-box"),
  score: document.getElementById("score-number"),
  results: document.getElementById("results"),
  skip: document.getElementById("skip-container"),
  next: document.getElementById("next"),
};

let score = 0;
let index = 0;
let emojiQ = questions[index].emojis;
let answer = questions[index].answer;

/* function start() {
  displayQuestion();
  checkAnswer();
}
start();
 */
//displays question

function displayQuestion() {
  DOMSelectors.emojiDisplay.insertAdjacentHTML(
    "afterbegin",
    `
    <p id="emojis">${emojiQ}</p>
    `
  );
}

displayQuestion();

//if (user input === answer) , score ++
//check answer if the user gets the question right, add one to the score
function checkAnswer() {
  const userInput = DOMSelectors.userInput.value;
  console.log(userInput);
  if (userInput === answer) {
    score++;
    index++;
    DOMSelectors.results.innerHTML = "Correct!";
    console.log("correct!");
    //console.log(index);
    //insert next btn
    DOMSelectors.next.insertAdjacentHTML(
      "afterbegin",
      `
      <button id="next-btn" class="button">Next</button>
      `
    );

    next();
  } else if (userInput === "") {
    console.log("nothing");
  } else {
    console.log("wrong");
    DOMSelectors.results.insertAdjacentHTML(
      "afterbegin",
      `
      <p>Oops try again!</p>
      `
    );
  }
}

function next() {
  DOMSelectors.next.addEventListener("click", function (e) {
    e.preventDefault();
    index++;
    console.log(index);
    displayQuestion();
    click();
  });
}

//for()
/* function next() {
  DOMSelectors.userInput.value = "";
  DOMSelectors.emojiDisplay.innerHTML = "";
  DOMSelectors.results.innerHTML = "";
  index++;
  let emojiQ = questions[index].emojis;
  let answer = questions[index].answer;
  DOMSelectors.emojiDisplay.insertAdjacentHTML(
    "afterbegin",
    `
    <p id="emojis">${emojiQ}</p>
    `
  );
  console.log(answer);
} */

function updateScore() {
  DOMSelectors.score.textContent = `${score}`;
}

function click() {}
DOMSelectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkAnswer();
  updateScore();
});
