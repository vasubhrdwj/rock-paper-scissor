const msg = document.querySelector(".msg");
const playerCh = document.querySelector(".player-ch");
const computerCh = document.querySelector(".computer-ch");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = ["Rock", "Paper", "Scissor"];
  let num = Math.floor((Math.random() * 10) % 3);

  computerCh.textContent = `Computer : ${choice[num]}`;

  return choice[num];
}

function playRound(humanChoice, computerChoice) {
  humanChoice =
    humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();

  if (humanChoice === computerChoice) {
    msg.textContent = `Tie!! Both chose ${humanChoice}`;
  } else if (humanChoice === "Paper") {
    if (computerChoice === "Rock") {
      msg.textContent = `You Won! ${humanChoice} beats ${computerChoice}`;
      humanScore++;
    } else {
      msg.textContent = `You lost! ${humanChoice} loses to ${computerChoice}`;
      computerScore++;
    }
  } else if (humanChoice === "Rock") {
    if (computerChoice === "Scissor") {
      msg.textContent = `You Won! ${humanChoice} beats ${computerChoice}`;
      humanScore++;
    } else {
      msg.textContent = `You lost! ${humanChoice} loses to ${computerChoice}`;
      computerScore++;
    }
  } else {
    if (computerChoice === "Paper") {
      msg.textContent = `You Won! ${humanChoice} beats ${computerChoice}`;
      humanScore++;
    } else {
      msg.textContent = `You lost! ${humanChoice} loses to ${computerChoice}`;
      computerScore++;
    }
  }
}

const allBtn = document.querySelector(".all-btn");

allBtn.addEventListener("click", (event) => {
  let target = event.target;
  switch (target.className) {
    case "rock-btn":
      playerCh.textContent = "Player: Rock ";
      playGame("rock");
      break;
    case "paper-btn":
      playerCh.textContent = `Player: Paper`;
      playGame("paper");
      break;
    case "scissor-btn":
      playerCh.textContent = "Player: Scissor";
      playGame("scissor");
      break;
    default:
      break;
  }
});

const humanScr = document.querySelector(".human-scr");
const computerScr = document.querySelector(".computer-scr");
const display = document.querySelector("#display");

function playGame(s) {
  playRound(s, getComputerChoice());
  humanScr.textContent = `Human Score: ${humanScore}`;
  computerScr.textContent = `Computer Score: ${computerScore}`;

  if (humanScore == 5 || computerScore == 5) {
    display.style.fontSize = "48px";
    display.style.textAlign = "center";
    display.style.fontWeight = "800";
    if (humanScore === computerScore) {
      display.textContent = "A Draw!";
    } else if (humanScore < computerScore) {
      display.textContent = "You Lost!!";
    } else {
      display.textContent = "YOU WON!!!!";
    }
  }
}
