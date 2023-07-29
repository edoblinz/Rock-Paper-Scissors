let playerScore = 0;
let computerScore = 0;
let totalRound = 0;
let gameOn = true;

function getComputerChoice() {
  let choiceList = ["rock", "paper", "scissors"];
  let choiceIndex = Math.floor(Math.random() * 3);
  return choiceList[choiceIndex];
}

let message = {
  tie: "Its a tie",
  win: ` YOU WIN. computer chose ${computerSelection} `,
  lose: `YOU LOSE. computer chose ${computerSelection}`,
  congrats: "Congratulations YOU WIN",
  lost: "Sorry you lost",
};
function playground(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return message["tie"];
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    ++playerScore;
    return message["win"];
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    ++playerScore;
    return message["win"];
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    ++playerScore;
    return message["win"];
  } else if (computerSelection == "rock" && playerSelection == "scissors") {
    ++computerScore;
    return message["lose"];
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    ++computerScore;
    return message["lose"];
  } else if (computerSelection == "scissors" && playerSelection == "paper") {
    ++computerScore;
    return message["lose"];
  }
}

function game() {
  while (gameOn) {
    let playerSelection = prompt("Rock, Paper, or Scissors: ").toLowerCase();
    let computerSelection = getComputerChoice();
    console.log(playground(playerSelection, computerSelection));
    console.log(`YOU: ${playerScore}, COMPUTER: ${computerScore}`);
    if (playerScore == 3 || computerScore == 3) {
      if (playerScore > computerScore) {
        return message["congrats"];
      } else {
        message.lost;
      }
      gameOn = false;
    }
  }
}

game();
