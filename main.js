// console.log("check");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = ["Rock", "Paper", "Scissor"];
  let num = Math.floor((Math.random() * 10) % 3);

  return choice[num];
}

function getHumanChoice() {
  let ch = prompt("Pick :- Rock, Paper, Scissor?");
  return ch;
}

function playRound(humanChoice, computerChoice) {
  humanChoice =
    humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();

  console.log("Human chose: " + humanChoice);
  console.log("Computer chose: " + computerChoice);

  if (humanChoice === computerChoice) {
    console.log(`Tie!! Both chose ${humanChoice}`);
  } else if (humanChoice === "Paper") {
    if (computerChoice === "Rock") {
      console.log(`You Won! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lost! ${humanChoice} loses to ${computerChoice}`);
      computerScore++;
    }
  } else if (humanChoice === "Rock") {
    if (computerChoice === "Scissor") {
      console.log(`You Won! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lost! ${humanChoice} loses to ${computerChoice}`);
      computerScore++;
    }
  } else {
    if (computerChoice === "Paper") {
      console.log(`You Won! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lost! ${humanChoice} loses to ${computerChoice}`);
      computerScore++;
    }
  }

  console.log(`Human Score: ${humanScore}`);
  console.log(`Computer Score: ${computerScore}`);
}

compCh = getComputerChoice();
humanCh = getHumanChoice();

playRound(humanCh, compCh);
