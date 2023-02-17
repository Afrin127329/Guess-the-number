// Selecting All the DOM Elements
const displayMsg = function (message) {
    document.querySelector(".message").textContent = message;
  };


  const displayHiddenNum = function (secretNumber) {
    document.querySelector(".num").textContent = secretNumber;
  };


  const displayHighscore = function (highScore) {
    document.querySelector("#high-score").textContent = highScore;
  };


  const msgColor = function (color) {
    document.querySelector(".message").style.color = color;
  };


  const bodyBackgroundColor = function (color) {
    document.querySelector("body").style.backgroundColor = color;
  };


  const displayScore = function (score) {
    document.querySelector("#score").textContent = score;
  };


  let secretNumber = Math.trunc(Math.random() * 100) + 1;
  let Score = 100;
  let highScoreValue = 0;
  let playAgainBtn = document.querySelector("#playAgain");
  let checkBtn = document.querySelector("#check");
  let guessNum = document.querySelector("#input");
  displayScore(Score);
  
  
  //Check Button
  checkBtn.addEventListener("click", () => {
    let value = Number(guessNum.value);
    if (guessNum.value) {
      if (value <= 100 && value > -1) {
        if (secretNumber === value) {
          msgColor("");
          displayMsg("You Win! 🤩");
          bodyBackgroundColor("#71ff4d");
          displayHiddenNum(secretNumber);
          if (Score > highScoreValue) {
            highScoreValue = Score;
            displayHighscore(highScoreValue);
          }
        } else if (secretNumber !== value) {
          msgColor("");
          displayMsg(value > secretNumber ? "Too High! 😯" : "Too low! 🙁");
          Score--;
          displayScore(Score);
          if (Score < 1) {
            msgColor("");
            displayMsg("You Lose! 😓");
            bodyBackgroundColor("red");
            displayScore(0);
            displayHiddenNum(secretNumber);
          }
        }
      } else {
        displayMsg("Out of Range! 😧");
        msgColor("blue");
      }
    } else {
      displayMsg("Please First Enter a Number...");
      msgColor("purple");
    }
  });
  

  
  //Play Again ‌Button
  playAgainBtn.addEventListener("click", () => {
    Score = 100;
    secretNumber = Math.trunc(Math.random() * 100) + 1;
    displayMsg("Start Guessing Again!");
    bodyBackgroundColor("");
    displayScore(Score);
    displayHiddenNum("Welcome back!");
    guessNum.value = "";
    msgColor("");
  });
