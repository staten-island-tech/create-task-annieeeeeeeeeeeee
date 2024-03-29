import "./style.css";
import { questions } from "./array.js";

const DOMSelectors = {
  emojiDisplay: document.getElementById("display"),
  userInput: document.getElementById("userInput"),
  form: document.getElementById("answer-box"),
  score: document.getElementById("score-number"),
  results: document.getElementById("results"),
  skip: document.getElementById("skip-container"),
  next: document.getElementById("next"),
  guessBtn: document.getElementById("guess-btn"),
  emojis: document.getElementById("emojis"),
  form: document.getElementById("answer-box"),
};

let score = 0;
let index = 0;
let numOfProblems = questions.length;
console.log(numOfProblems);

DOMSelectors.next.addEventListener("click", function () {
  index++;
  //console.log(index);
  nextQuestion();
  DOMSelectors.next.innerHTML = "";
  DOMSelectors.guessBtn.disabled = false;
});

function nextQuestion() {
  if (index === questions.length) {
    console.log("Game over");
  } else {
    clearFields();
    displayQuestion(questions[index]);
  }
}

function displayQuestion(questions) {
  DOMSelectors.emojiDisplay.insertAdjacentHTML(
    "afterbegin",
    `
    <p id="emojis">${questions.emojis}</p>
    `
  );
}
function clearFields() {
  DOMSelectors.userInput.value = "";
  DOMSelectors.emojiDisplay.innerHTML = "";
  DOMSelectors.results.innerHTML = "";
}
//if (user input === answer) , score ++
//check answer if the user gets the question right, add one to the score

function checkAnswer(input) {
  if (input === questions[index].answer) {
    score++;
    DOMSelectors.results.innerHTML = "Correct!";
    console.log("correct!");

    DOMSelectors.next.insertAdjacentHTML(
      "afterbegin",
      `
      <button id="next-btn" class="button">Next</button>
      `
    );
    DOMSelectors.guessBtn.disabled = true;
    updateScore();
    DOMSelectors.userInput.value = "";
  } else {
    console.log("wrong");
    DOMSelectors.results.innerHTML = "Oops try again!";
    DOMSelectors.userInput.value = "";
  }
}

function updateScore() {
  DOMSelectors.score.textContent = `${score}`;
}

function submit() {}
DOMSelectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
  let userInput = DOMSelectors.userInput.value;
  console.log(userInput);
  checkAnswer(userInput);
});
submit();

function endScreen() {
  DOMSelectors.form.innerHTML = "";
}
