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
function totGame() {
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
        Swal.fire({
          icon: "warning",
          title: "Este campo já está em uso!",
        });
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
    winAlert();
  }
  if (
    leftMiddleDiv.innerText === "X" &&
    middleMiddleDiv.innerText === "X" &&
    rightMiddleDiv.innerText === "X"
  ) {
    winAlert();
  }
  if (
    leftBottomDiv.innerText === "X" &&
    middleBottomDiv.innerText === "X" &&
    rightBottomDiv.innerText === "X"
  ) {
    winAlert();
  }
  if (
    leftTopDiv.innerText === "O" &&
    middleTopDiv.innerText === "O" &&
    rightTopDiv.innerText === "O"
  ) {
    loseAlert();
  }
  if (
    leftMiddleDiv.innerText === "O" &&
    middleMiddleDiv.innerText === "O" &&
    rightMiddleDiv.innerText === "O"
  ) {
    loseAlert();
  }
  if (
    leftBottomDiv.innerText === "O" &&
    middleBottomDiv.innerText === "O" &&
    rightBottomDiv.innerText === "O"
  ) {
    loseAlert();
  }
  if (
    leftTopDiv.innerText === "X" &&
    leftMiddleDiv.innerText === "X" &&
    leftBottomDiv.innerText === "X"
  ) {
    winAlert();
  }
  if (
    middleTopDiv.innerText === "X" &&
    middleMiddleDiv.innerText === "X" &&
    middleBottomDiv.innerText === "X"
  ) {
    winAlert();
  }
  if (
    rightTopDiv.innerText === "X" &&
    rightMiddleDiv.innerText === "X" &&
    rightBottomDiv.innerText === "X"
  ) {
    winAlert();
  }
  if (
    leftTopDiv.innerText === "O" &&
    leftMiddleDiv.innerText === "O" &&
    leftBottomDiv.innerText === "O"
  ) {
    loseAlert();
  }
  if (
    middleTopDiv.innerText === "O" &&
    middleMiddleDiv.innerText === "O" &&
    middleBottomDiv.innerText === "O"
  ) {
    loseAlert();
  }
  if (
    rightTopDiv.innerText === "O" &&
    rightMiddleDiv.innerText === "O" &&
    rightBottomDiv.innerText === "O"
  ) {
    loseAlert();
  }
  if (
    leftTopDiv.innerText === "X" &&
    middleMiddleDiv.innerText === "X" &&
    rightBottomDiv.innerText === "X"
  ) {
    winAlert();
  }
  if (
    leftTopDiv.innerText === "O" &&
    middleMiddleDiv.innerText === "O" &&
    rightBottomDiv.innerText === "O"
  ) {
    loseAlert();
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
  allDivs.forEach((div) => {
    div.textContent = "";
    div.classList.add("free");
  });
  countX = 0;
  countO = 0;
  totGame();
}

//Win Alert

function winAlert() {
  Swal.fire({
    title: "Parabéns!",
    text: "Você venceu essa rodada!",
    imageUrl: "./img/smile-emoji.png",
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: "Smile Emoji",
  });
  playerWin++;
  endGame();
}

//lose Alert
function loseAlert() {
  Swal.fire({
    title: "Que pena!",
    text: "Você perdeu essa rodada!",
    imageUrl: "./img/cry-emoji.png",
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: "Crying Emoji",
  });
  computerWin++;
  endGame();
}
