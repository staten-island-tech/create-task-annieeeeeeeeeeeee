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

//for each question
for (let i = 0; i < questions.length; i++) {
  DOMSelectors.emojiDisplay.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="background"><p id="emojis">${questions[i].emojis}</p></div>

    <form>
        <div class="input">
          <input
            type="text"
            id="userInput"
            placeholder="Type Your Guess"
            required
          />
        </div>
        <div id="submit">
          <input type="submit" value="Guess" class="button" id="guess-btn" />
          <div id="next"></div>
        </div>
      </form>

    `
  );
  submit();
  //console.log(questions[i].emojis);
}
function checkAnswer(userInput) {
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
