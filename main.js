// console.log("check");

function getComputerChoice() {
  let choice = ["rock", "paper", "scissor"];
  let num = Math.floor((Math.random() * 10) % 3);

  return choice[num];
}

console.log(getComputerChoice());
