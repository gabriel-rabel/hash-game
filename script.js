/*HASH GAME by Gabriel Rabel
Bootcamp IronHack Project
https://www.linkedin.com/in/gabrielrabel
https://github.com/gabriel-rabel
Enjoy...
*/
const leftTopDiv = document.getElementById("left-top-div");
const middleTopDiv = document.getElementById("middle-top-div");
const rightTopDiv = document.getElementById("right-top-div");
const leftMiddleDiv = document.getElementById("left-middle-div");
const middleMiddleDiv = document.getElementById("middle-middle-div");
const rightMiddleDiv = document.getElementById("right-middle-div");
const leftBottomDiv = document.getElementById("left-bottom-div");
const middleBottomDiv = document.getElementById("middle-bottom-div");
const rightBottomDiv = document.getElementById("right-bottom-div");
const restartButton = document.getElementById("restart-button");
const playerCounter = document.getElementById("player-counter");
const computerCounter = document.getElementById("computer-counter");
const allDivs = document.querySelectorAll(".inputGame");


//counters
let countX = 0;
let countO = 0;

let playerWin = 0;
let computerWin = 0;

//score
totGame();
function totGame(){
  playerCounter.innerText = playerWin;
  computerCounter.innerText = computerWin;
}

//restart game button
restartButton.addEventListener("click", () => {
  window.location.reload();
});

//init game
initGame();
function initGame() {
  let selectDiv = document.querySelectorAll(".free");
  selectDiv.forEach((hashDiv) => {
    hashDiv.addEventListener("click", () => {
      if (hashDiv.innerText === "X" || hashDiv.innerText === "O") {
        alert("O campo já foi selecionado!");
        return;
      }
      if (verifyTurn() === true) {
        hashDiv.innerText = "X";
        countX++;
        hashDiv.classList.remove("free");
        setTimeout(function () {
          verifyEndGame();
          result();
        }, 200);
      }
      setTimeout(computerChoice, 400);
      countO++;
    });
  });
}

//Verify Player Turn
let isPlayer = true;
function verifyTurn() {
  if (countX <= countO) {
    isPlayer = true;
  } else {
    isPlayer = false;
  }
  return isPlayer;
}

//Computer Turn
function computerChoice() {
  let selectDiv = document.querySelectorAll(".free");
  if (selectDiv.length === 0) {
    return;
  }
  const randomDivIndex = Math.floor(Math.random() * selectDiv.length);
  const randomDiv = selectDiv[randomDivIndex];
  randomDiv.innerText = "O";
  randomDiv.classList.remove("free");
  setTimeout(function () {
    result();
    verifyEndGame();
  }, 200);
  +console.log(playerWin);
}

//Result verify
function result() {
  if (
    leftTopDiv.innerText === "X" &&
    middleTopDiv.innerText === "X" &&
    rightTopDiv.innerText === "X"
  ) {
    alert("Parabéns, você venceu!");
    playerWin++;
    endGame();
  }
  if (
    leftMiddleDiv.innerText === "X" &&
    middleMiddleDiv.innerText === "X" &&
    rightMiddleDiv.innerText === "X"
  ) {
    alert("Parabéns, você venceu!");
    playerWin++;
    endGame();
  }
  if (
    leftBottomDiv.innerText === "X" &&
    middleBottomDiv.innerText === "X" &&
    rightBottomDiv.innerText === "X"
  ) {
    alert("Parabéns, você venceu!");
    playerWin++;
    endGame();
  }
  if (
    leftTopDiv.innerText === "O" &&
    middleTopDiv.innerText === "O" &&
    rightTopDiv.innerText === "O"
  ) {
    alert("Vitória do Computador");
    computerWin++;
    endGame();
  }
  if (
    leftMiddleDiv.innerText === "O" &&
    middleMiddleDiv.innerText === "O" &&
    rightMiddleDiv.innerText === "O"
  ) {
    alert("Vitória do Computador");
    computerWin++;
    endGame();
  }
  if (
    leftBottomDiv.innerText === "O" &&
    middleBottomDiv.innerText === "O" &&
    rightBottomDiv.innerText === "O"
  ) {
    alert("Vitória do Computador");
    computerWin++;
    endGame();
  }
  if (
    leftTopDiv.innerText === "X" &&
    leftMiddleDiv.innerText === "X" &&
    leftBottomDiv.innerText === "X"
  ) {
    alert("Parabéns, você venceu!");
    playerWin++;
    endGame();
  }
  if (
    middleTopDiv.innerText === "X" &&
    middleMiddleDiv.innerText === "X" &&
    middleBottomDiv.innerText === "X"
  ) {
    alert("Parabéns, você venceu!");
    playerWin++;
    endGame();
  }
  if (
    rightTopDiv.innerText === "X" &&
    rightMiddleDiv.innerText === "X" &&
    rightBottomDiv.innerText === "X"
  ) {
    alert("Parabéns, você venceu!");
    playerWin++;
    endGame();
  }
  if (
    leftTopDiv.innerText === "O" &&
    leftMiddleDiv.innerText === "O" &&
    leftBottomDiv.innerText === "O"
  ) {
    alert("Vitória do Computador");
    computerWin++;
    endGame();
  }
  if (
    middleTopDiv.innerText === "O" &&
    middleMiddleDiv.innerText === "O" &&
    middleBottomDiv.innerText === "O"
  ) {
    alert("Vitória do Computador");
    computerWin++;
    endGame();
  }
  if (
    rightTopDiv.innerText === "O" &&
    rightMiddleDiv.innerText === "O" &&
    rightBottomDiv.innerText === "O"
  ) {
    alert("Vitória do Computador");
    computerWin++;
    endGame();
  }
  if (
    leftTopDiv.innerText === "X" &&
    middleMiddleDiv.innerText === "X" &&
    rightBottomDiv.innerText === "X"
  ) {
    alert("Parabéns, você venceu!");
    playerWin++;
    endGame();
  }
  if (
    leftTopDiv.innerText === "O" &&
    middleMiddleDiv.innerText === "O" &&
    rightBottomDiv.innerText === "O"
  ) {
    alert("Vitória do Computador");
    computerWin++;
    endGame();
  }
}

//Verify End Game
function verifyEndGame() {
  let selectDiv = document.querySelectorAll(".free");
  if (!selectDiv.length) {
    alert("Fim do Jogo!");
    endGame();
  }
}

//End Game
function endGame() {
  alert("Vamos reinicar o jogo para você.");
  allDivs.forEach((div)=> {
    div.textContent = "";
    div.classList.add("free");
  })
  countX = 0;
  countO = 0;
  totGame();
}
