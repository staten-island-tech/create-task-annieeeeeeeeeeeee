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
};

let score = 0;
let index = 0;
//let currentQuestion = questions[index].emojis;
let answer = questions[index].answer;
//nextQuestion();

DOMSelectors.next.addEventListener("click", function () {
  index++;
  console.log(index);
  nextQuestion();
  DOMSelectors.next.innerHTML = "";
  DOMSelectors.guessBtn.disabled = false;
  //click();
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

//displayQuestion();

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
    DOMSelectors.results.insertAdjacentHTML(
      "afterbegin",
      `
      <p>Oops try again!</p>
      `
    );
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
//function next() {

//}
//next();
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
