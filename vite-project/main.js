import "./style.css";
import { emojis } from "./array.js";

const DOMSelectors = {
  emojiDisplay: document.getElementById("picture-display"),
};

function HTML(emojis) {
  DOMSelectors.emojiDisplay.insertAdjacentHTML(
    "afterbegin",
    `
<img src="${emojis.img}" class="img"/>
  `
  );
}

function score() {
  let score = 0;
  score++;
  console.log(score);
}
score();

function genQ() {
  emojis.forEach((e) => {
    HTML(e);
  });
}

//if (user input === answer) , score ++
displayQ();
function wrong() {}
