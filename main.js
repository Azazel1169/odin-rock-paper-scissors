


console.log("Welcome, let's play Rock, Paper, Scissors!");

const choices = ["rock", "paper", "scissors"];

function getPlayerChoice() {
  let choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
  while (!choices.includes(choice)) {
    choice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
  }
  return choice;
}

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getResult(player, computer) {
  if (player === computer) return "It's a tie!";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You win!";
  }
  return "You lose!";
}

let playAgain = true;
while (playAgain) {
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();

  console.log(`You chose: ${playerChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
  console.log(getResult(playerChoice, computerChoice));

  playAgain = confirm("Do you want to play again?");
}

console.log(`Thanks for playing! Goodbye!`);
