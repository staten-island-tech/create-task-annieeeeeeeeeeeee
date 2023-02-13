import "./style.css";
import { questions } from "./array.js";

const DOMSelectors = {
  emojiDisplay: document.getElementById("picture-display"),
  userInput: document.getElementById("userInput"),
  form: document.getElementById("answer-box"),
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

let question = Math.floor(Math.random() * questions.length);
let emojiQ = questions[question].emojis;
let answer = questions[question].answer;

DOMSelectors.emojiDisplay.insertAdjacentHTML(
  "afterbegin",
  `
    <p id="emojis">${emojiQ}</p>
    `
);

//if (user input === answer) , score ++

let score = 0;
function checkAnswer() {
  const userInput = DOMSelectors.userInput.value;
  console.log(userInput);

  if (userInput === answer) {
    score++;
  } else {
    console.log("wrong");
  }
  console.log(score);
}

DOMSelectors.form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkAnswer();
});
