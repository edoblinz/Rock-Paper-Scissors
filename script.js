let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

function getComputerChoice() {
  let choiceList = ["rock", "paper", "scissors"];
  let choiceIndex = Math.floor(Math.random() * 3);
  return choiceList[choiceIndex];
}

function playground(playerSelection, computerSelection) {
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    roundWinner = "player";
    playerScore++;
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper")
  ) {
    roundWinner = "computer";
    computerScore++;
  } else {
    roundWinner = "tie";
  }
}
const handleClick = (playerChoice) => {
 
  let computerChoice = getComputerChoice();
  playground(playerChoice, computerChoice);
  displayResults(playerChoice, computerChoice);
  if (playerScore == 5 || computerScore == 5) {
    endGame()
    return;
  }
};

rockBtn.addEventListener("click", () => handleClick("rock"));
paperBtn.addEventListener("click", () => handleClick("paper"));
scissorsBtn.addEventListener("click", () => handleClick("scissors"));


// DISPLAY UI
let playerSign = document.querySelector("#playerSign");
let playerScoreBoard = document.querySelector("#playerScore");
let computerSign = document.querySelector("#computerSign");
let computerScoreBoard = document.querySelector("#computerScore");
let scoreInfo = document.querySelector("#scoreInfo");
let scoreMessage = document.querySelector("#scoreMessage");
let modal = document.querySelector("#endgameModal")
let overlay = document.querySelector("#overlay")
let endgameMsg = document.querySelector("#endgameMsg")
let restartBtn = document.querySelector("#restartBtn")

const displayResults = (player, computer) => {
  switch (player) {
    case "rock":
      playerSign.textContent = "✊";
      break;
    case "paper":
      playerSign.textContent = "✋";
      break;
    case "scissors":
      playerSign.textContent = "✌";
      break;
  }
  switch (computer) {
    case "rock":
      computerSign.textContent = "✊";
      break;
    case "paper":
      computerSign.textContent = "✋";
      break;
    case "scissors":
      computerSign.textContent = "✌";
      break;
  }

  switch (roundWinner) {
    case "player":
      scoreInfo.textContent = "You win!";
      scoreMessage.textContent = `${computer} is beaten by ${player}`;
      break;
    case "computer":
      scoreInfo.textContent = "You lost!";
      scoreMessage.textContent = `${player} is beaten by ${computer}`;
      break;
    case "tie":
      scoreInfo.textContent = "It's a tie";
      scoreMessage.textContent = `${computer} ties with ${player}`;
      break;
  }
  playerScoreBoard.textContent = `Player: ${playerScore}`;
  computerScoreBoard.textContent = `Computer: ${computerScore}`;
};

function endGame() {
  modal.classList.add("active")
  overlay.classList.add("active")
  let finalMessage = playerScore > computerScore ? "You won!.." : "You lost!..."
  endgameMsg.textContent = finalMessage;
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  roundWinner = "";
  scoreInfo.textContent = "Choose your weapon"
  scoreMessage.textContent = "First to score 5 points wins the game"
  playerSign.textContent = "❔"
  computerSign.textContent = "❔"
  playerScoreBoard.textContent = "Player: 0"
  computerScoreBoard.textContent = "computer: 0"
  modal.classList.remove("active")
  overlay.classList.remove("active")
};
restartBtn.addEventListener("click", restartGame);
