"use strict";

let secretNum = Math.trunc(Math.random() * 20) + 1;
let attempt = 5;
let score = 20;
let highscore = 0;
let playing = true;

document.querySelector("#enter").addEventListener("click", function () {
  if (playing) {
    const num = Number(document.querySelector("#valu").value);
    console.log(num, typeof num);

    if (!num) {
      document.querySelector(".gamestatus").textContent = "No Number Entered!!";
    } else if (num === secretNum) {
      document.querySelector(".gamestatus").textContent = "Correctly Guessed!!";
      document.querySelector("#solutionbox").textContent = secretNum;
      document.querySelector("#hscore").textContent = score;
      document.querySelector("body").style.backgroundColor = "#0c9100";
      playing = false;
      if (score > highscore) {
        highscore = score;
        document.querySelector("#hscore").textContent = highscore;
      }
    } else if (num !== secretNum) {
      document.querySelector(".gamestatus").textContent =
        num > secretNum ? "Too High!" : "Too Low!";
      if (score > 0) {
        score--;
        document.querySelector("#score").textContent = score;
      } else {
        document.querySelector(".gamestatus").textContent =
          "You lost the Game!";
        document.querySelector("body").style.backgroundColor = "#ba1e1e";
        playing = false;
      }
    }
  }
});

document.querySelector(".replay").addEventListener("click", function () {
  playing = true;
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".gamestatus").textContent = "Start Guessing...";
  document.querySelector("#valu").value = "";
  document.querySelector("#score").textContent = 20;
  document.querySelector("#hscore").textContent = highscore;
  document.querySelector("#solutionbox").textContent = "??";
  document.querySelector("body").style.backgroundColor = "black";
});
