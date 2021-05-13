const rockBtn = document.querySelector(".rock-btn-js"),
  paperBtn = document.querySelector(".paper-btn-js"),
  scissorBtn = document.querySelector(".scissor-btn-js"),
  h1 = document.querySelector("h1");

// btn click events ..........
rockBtn.addEventListener("click", function () {
  playGame(getRandomRockPaperScissors(), "rock");
});
paperBtn.addEventListener("click", function () {
  playGame(getRandomRockPaperScissors(), "paper");
});
scissorBtn.addEventListener("click", function () {
  playGame(getRandomRockPaperScissors(), "scissors");
});

function getRandomRockPaperScissors() {
  let arr = ["rock", "paper", "scissors"];
  return arr[Math.floor(Math.random() * 3)];
}

const winCombos = { rock: "paper", paper: "scissors", scissors: "rock" };

function playGame(robotAnswer, playerAnswer) {
  robotAnswerValue = robotAnswer;
  playerAnswerValue = playerAnswer;
  if (robotAnswer === playerAnswer) {
    h1.textContent = "it was a tie";
  } else if (winCombos[robotAnswer] === playerAnswer) {
    displayPlayerWon();
  } else {
    displayRobotWon();
  }
  displayAnswerTxt(robotAnswerValue,playerAnswerValue);
}

// display who won, their answer & score
let robotScore = 0;
let playerScore = 0;
const playerWinnerDisplay = document.querySelector(".playerScore"),
  playerAnswerDisplay = document.querySelector(".playerTxt"),
  robotWinnerDisplay = document.querySelector(".robotScore"),
  robotAnswerDisplay = document.querySelector(".robotTxt");

function displayAnswerTxt() {
  robotAnswerDisplay.textContent = `ROBOT: ${robotAnswerValue} `;
  playerAnswerDisplay.textContent = `YOU: ${playerAnswerValue} `;
}

function displayPlayerWon() {
  playerScore++;
  h1.textContent = "you won!";
  h1.classList.add("playerTextColor");
  playerWinnerDisplay.textContent = `[ ${playerScore} ]`;
}

function displayRobotWon() {
  robotScore++;
  h1.textContent = "the robot won!";
  h1.classList.add("robotTextColor");
  robotWinnerDisplay.textContent = `[ ${robotScore} ]`;
}
