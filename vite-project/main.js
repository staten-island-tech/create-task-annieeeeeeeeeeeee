import "./style.css";
import { questions } from "./array.js";

const DOMSelectors = {
  emojiDisplay: document.getElementById("picture-display"),
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
function generateQ() {
  let question = Math.floor(Math.random() * questions.length);
  let emojiQ = questions[question].emojis;
  let answer = questions[question].answer;

  DOMSelectors.emojiDisplay.insertAdjacentHTML(
    "afterbegin",
    `
    <p id="emojis">${emojiQ}</p>
    `
  );
}

generateQ();
//if (user input === answer) , score ++

function wrong() {}
