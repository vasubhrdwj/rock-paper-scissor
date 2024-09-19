// console.log("check");

function getComputerChoice() {
  let choice = ["Rock", "Paper", "Scissor"];
  let num = Math.floor((Math.random() * 10) % 3);

  return choice[num];
}

function getHumanChoice() {
  let ch = prompt("Pick :- Rock, Paper, Scissor?");
  return ch;
}

console.log(getComputerChoice());
console.log(getHumanChoice());
