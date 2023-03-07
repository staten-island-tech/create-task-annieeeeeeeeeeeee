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
};

let score = 0;
let index = 0;

DOMSelectors.next.addEventListener("click", function () {
  index++;
  console.log(index);
  nextQuestion();
  DOMSelectors.next.innerHTML = "";
  DOMSelectors.guessBtn.disabled = false;
});

function clearFields() {
  DOMSelectors.userInput.value = "";
  DOMSelectors.emojiDisplay.innerHTML = "";
  DOMSelectors.results.innerHTML = "";
}

function nextQuestion() {
  clearFields();
  displayQuestion(questions[index]);
}

function displayQuestion(questions) {
  DOMSelectors.emojiDisplay.insertAdjacentHTML(
    "afterbegin",
    `
    <p id="emojis">${questions.emojis}</p>
    `
  );
}

//if (user input === answer) , score ++
//check answer if the user gets the question right, add one to the score
function checkAnswer() {
  const userInput = DOMSelectors.userInput.value;
  console.log(userInput);
  if (userInput === questions[index].answer) {
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
  } else if (userInput === "") {
    console.log("nothing");
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
  checkAnswer();
});
submit();
