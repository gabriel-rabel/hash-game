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
const announceWin = document.getElementById("announce-win");
const announceLose = document.getElementById("announce-lose");
const allDivs = document.querySelectorAll(".inputGame");

//counters
let countX = 0;
let countO = 0;

let playerWin = 0;
let computerWin = 0;

//score

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
      }
      if (verifyTurn() === true) {
        hashDiv.innerText = "X";
        countX++;
        hashDiv.classList.remove("free");
        verifyEndGame();
      }
      setTimeout(computerChoice, 800);
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
  const randomDivIndex = Math.floor(Math.random() * selectDiv.length);
  const randomDiv = selectDiv[randomDivIndex];
  randomDiv.innerText = "O";
  randomDiv.classList.remove("free");
  setTimeout(function () {
    result();
    verifyEndGame();
  }, 200);
}
//Result verify
function result() {
  //top row
  if (
    leftTopDiv.innerText === "X" &&
    middleTopDiv.innerText === "X" &&
    rightTopDiv.innerText === "X"
  ) {
    leftTopDiv.style.backgroundImage =
      "url('./img/back-div-red-horizontal.png')";
    middleTopDiv.style.backgroundImage =
      "url('./img/back-div-red-horizontal.png')";
    rightTopDiv.style.backgroundImage =
      "url('./img/back-div-red-horizontal.png')";
    leftTopDiv.classList.remove("redLine");
    middleTopDiv.classList.remove("redLine");
    rightTopDiv.classList.remove("redLine");
    winAlert();
  }
  if (
    leftTopDiv.innerText === "O" &&
    middleTopDiv.innerText === "O" &&
    rightTopDiv.innerText === "O"
  ) {
    leftTopDiv.style.backgroundImage =
      "url('./img/back-div-red-horizontal.png')";
    middleTopDiv.style.backgroundImage =
      "url('./img/back-div-red-horizontal.png')";
    rightTopDiv.style.backgroundImage =
      "url('./img/back-div-red-horizontal.png')";
    leftTopDiv.classList.remove("redLine");
    middleTopDiv.classList.remove("redLine");
    rightTopDiv.classList.remove("redLine");
    loseAlert();
  }
  //bottom row
  if (
    leftBottomDiv.innerText === "X" &&
    middleBottomDiv.innerText === "X" &&
    rightBottomDiv.innerText === "X"
  ) {
    leftBottomDiv.style.backgroundImage =
      "url('./img/back-div-red-horizontal.png')";
    middleBottomDiv.style.backgroundImage =
      "url('./img/back-div-red-horizontal.png')";
    rightBottomDiv.style.backgroundImage =
      "url('./img/back-div-red-horizontal.png')";
    leftBottomDiv.classList.remove("redLine");
    middleBottomDiv.classList.remove("redLine");
    rightBottomDiv.classList.remove("redLine");
    winAlert();
  }
  if (
    leftBottomDiv.innerText === "O" &&
    middleBottomDiv.innerText === "O" &&
    rightBottomDiv.innerText === "O"
  ) {
    leftBottomDiv.style.backgroundImage =
      "url('./img/back-div-red-horizontal.png')";
    middleBottomDiv.style.backgroundImage =
      "url('./img/back-div-red-horizontal.png')";
    rightBottomDiv.style.backgroundImage =
      "url('./img/back-div-red-horizontal.png')";
    leftBottomDiv.classList.remove("redLine");
    middleBottomDiv.classList.remove("redLine");
    rightBottomDiv.classList.remove("redLine");
    loseAlert();
  }
  //middle row
  if (
    leftMiddleDiv.innerText === "X" &&
    middleMiddleDiv.innerText === "X" &&
    rightMiddleDiv.innerText === "X"
  ) {
    leftMiddleDiv.style.backgroundImage =
      "url('./img/back-div-red-horizontal.png')";
    middleMiddleDiv.style.backgroundImage =
      "url('./img/back-div-red-horizontal.png')";
    rightMiddleDiv.style.backgroundImage =
      "url('./img/back-div-red-horizontal.png')";
    leftMiddleDiv.classList.remove("redLine");
    middleMiddleDiv.classList.remove("redLine");
    rightMiddleDiv.classList.remove("redLine");
    winAlert();
  }
  if (
    leftMiddleDiv.innerText === "O" &&
    middleMiddleDiv.innerText === "O" &&
    rightMiddleDiv.innerText === "O"
  ) {
    leftMiddleDiv.style.backgroundImage =
      "url('./img/back-div-red-horizontal.png')";
    middleMiddleDiv.style.backgroundImage =
      "url('./img/back-div-red-horizontal.png')";
    rightMiddleDiv.style.backgroundImage =
      "url('./img/back-div-red-horizontal.png')";
    leftMiddleDiv.classList.remove("redLine");
    middleMiddleDiv.classList.remove("redLine");
    rightMiddleDiv.classList.remove("redLine");
    loseAlert();
  }

  //left column
  if (
    leftTopDiv.innerText === "X" &&
    leftMiddleDiv.innerText === "X" &&
    leftBottomDiv.innerText === "X"
  ) {
    leftTopDiv.style.backgroundImage = "url('./img/back-div-red.png')";
    leftMiddleDiv.style.backgroundImage = "url('./img/back-div-red.png')";
    leftBottomDiv.style.backgroundImage = "url('./img/back-div-red.png')";
    leftTopDiv.classList.remove("redLine");
    leftMiddleDiv.classList.remove("redLine");
    leftBottomDiv.classList.remove("redLine");
    winAlert();
  }
  if (
    leftTopDiv.innerText === "O" &&
    leftMiddleDiv.innerText === "O" &&
    leftBottomDiv.innerText === "O"
  ) {
    leftTopDiv.style.backgroundImage = "url('./img/back-div-red.png')";
    leftMiddleDiv.style.backgroundImage = "url('./img/back-div-red.png')";
    leftBottomDiv.style.backgroundImage = "url('./img/back-div-red.png')";
    leftTopDiv.classList.remove("redLine");
    leftMiddleDiv.classList.remove("redLine");
    leftBottomDiv.classList.remove("redLine");
    loseAlert();
  }
  //middle column
  if (
    middleTopDiv.innerText === "X" &&
    middleMiddleDiv.innerText === "X" &&
    middleBottomDiv.innerText === "X"
  ) {
    middleTopDiv.style.backgroundImage = "url('./img/back-div-red.png')";
    middleMiddleDiv.style.backgroundImage = "url('./img/back-div-red.png')";
    middleBottomDiv.style.backgroundImage = "url('./img/back-div-red.png')";
    middleTopDiv.classList.remove("redLine");
    middleMiddleDiv.classList.remove("redLine");
    middleBottomDiv.classList.remove("redLine");
    winAlert();
  }
  if (
    middleTopDiv.innerText === "O" &&
    middleMiddleDiv.innerText === "O" &&
    middleBottomDiv.innerText === "O"
  ) {
    middleTopDiv.style.backgroundImage = "url('./img/back-div-red.png')";
    middleMiddleDiv.style.backgroundImage = "url('./img/back-div-red.png')";
    middleBottomDiv.style.backgroundImage = "url('./img/back-div-red.png')";
    middleTopDiv.classList.remove("redLine");
    middleMiddleDiv.classList.remove("redLine");
    middleBottomDiv.classList.remove("redLine");
    loseAlert();
  }
  //right column
  if (
    rightTopDiv.innerText === "X" &&
    rightMiddleDiv.innerText === "X" &&
    rightBottomDiv.innerText === "X"
  ) {
    rightTopDiv.style.backgroundImage = "url('./img/back-div-red.png')";
    rightMiddleDiv.style.backgroundImage = "url('./img/back-div-red.png')";
    rightBottomDiv.style.backgroundImage = "url('./img/back-div-red.png')";
    rightTopDiv.classList.remove("redLine");
    rightMiddleDiv.classList.remove("redLine");
    rightBottomDiv.classList.remove("redLine");
    winAlert();
  }
  if (
    rightTopDiv.innerText === "O" &&
    rightMiddleDiv.innerText === "O" &&
    rightBottomDiv.innerText === "O"
  ) {
    rightTopDiv.style.backgroundImage = "url('./img/back-div-red.png')";
    rightMiddleDiv.style.backgroundImage = "url('./img/back-div-red.png')";
    rightBottomDiv.style.backgroundImage = "url('./img/back-div-red.png')";
    rightTopDiv.classList.remove("redLine");
    rightMiddleDiv.classList.remove("redLine");
    rightBottomDiv.classList.remove("redLine");
    loseAlert();
  }
  //transverse x to y
  if (
    leftTopDiv.innerText === "X" &&
    middleMiddleDiv.innerText === "X" &&
    rightBottomDiv.innerText === "X"
  ) {
    leftTopDiv.style.backgroundImage = "url('./img/back-div-red-xy.png')";
    middleMiddleDiv.style.backgroundImage = "url('./img/back-div-red-xy.png')";
    rightBottomDiv.style.backgroundImage = "url('./img/back-div-red-xy.png')";
    leftTopDiv.classList.remove("redLine");
    middleMiddleDiv.classList.remove("redLine");
    rightBottomDiv.classList.remove("redLine");
    winAlert();
  }
  if (
    leftTopDiv.innerText === "O" &&
    middleMiddleDiv.innerText === "O" &&
    rightBottomDiv.innerText === "O"
  ) {
    leftTopDiv.style.backgroundImage = "url('./img/back-div-red-xy.png')";
    middleMiddleDiv.style.backgroundImage = "url('./img/back-div-red-xy.png')";
    rightBottomDiv.style.backgroundImage = "url('./img/back-div-red-xy.png')";
    leftTopDiv.classList.remove("redLine");
    middleMiddleDiv.classList.remove("redLine");
    rightBottomDiv.classList.remove("redLine");
    loseAlert();
  }
  if (
    rightTopDiv.innerText === "X" &&
    middleMiddleDiv.innerText === "X" &&
    leftBottomDiv.innerText === "X"
  ) {
    rightTopDiv.style.backgroundImage = "url('./img/back-div-red-yx.png')";
    middleMiddleDiv.style.backgroundImage = "url('./img/back-div-red-yx.png')";
    leftBottomDiv.style.backgroundImage = "url('./img/back-div-red-yx.png')";
    rightTopDiv.classList.remove("redLine");
    middleMiddleDiv.classList.remove("redLine");
    leftBottomDiv.classList.remove("redLine");
    winAlert();
  }
  if (
    rightTopDiv.innerText === "O" &&
    middleMiddleDiv.innerText === "O" &&
    leftBottomDiv.innerText === "O"
  ) {
    rightTopDiv.style.backgroundImage = "url('./img/back-div-red-yx.png')";
    middleMiddleDiv.style.backgroundImage = "url('./img/back-div-red-yx.png')";
    leftBottomDiv.style.backgroundImage = "url('./img/back-div-red-yx.png')";
    rightTopDiv.classList.remove("redLine");
    middleMiddleDiv.classList.remove("redLine");
    leftBottomDiv.classList.remove("redLine");
    loseAlert();
  }
}

//Verify End Game
function verifyEndGame() {
  let selectDiv = document.querySelectorAll(".free");
  if (selectDiv.length === 0) {
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
  allDivs.forEach((div) => {
    div.classList.add("redLine");
  });
}

//Win Alert
function winAlert() {
  announceWin.classList.remove("hide");
  playerWin++;
  setTimeout(() => {
    endGame();
    announceWin.classList.add("hide");
  }, 3000);
}

//lose Alert
function loseAlert() {
  announceLose.classList.remove("hide");
  computerWin++;
  setTimeout(() => {
    endGame();
    announceLose.classList.add("hide");
  }, 3000);
}
