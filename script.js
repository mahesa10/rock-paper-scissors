const RPS = ["rock", "paper", "scissors"];

function computerPlay() {
    let randomNum = Math.floor(Math.random() * RPS.length);
    return RPS[randomNum]
}

let playerScore = 0;
let computerScore = 0;

function playRPS(computerSelection, playerSelection) {
    if (computerSelection === "rock" && playerSelection === "paper") {
        playerScore++
        return "You Won! Paper beats Rock";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore++
        return "You Lose! Rock beats Scissors";
    } else if (computerSelection === "rock" && playerSelection === "rock") {
        return "You Draw ! Rock meets Rock";
    }
    
    if (computerSelection === "paper" && playerSelection === "scissors") {
        playerScore++
        return "You Won! Scissors beats Paper";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore++
        return "You Lose! Paper beats Rock";
    } else if (computerSelection === "paper" && playerSelection === "paper") {
        return "You Draw ! Paper meets Paper";
    }
    
    if (computerSelection === "scissors" && playerSelection === "rock") {
        playerScore++
        return "You Won! Rock beats Scissors";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        computerScore++
        return "You Lose! Scissors beats Paper";
    } else if (computerSelection === "scissors" && playerSelection === "scissors") {
        return "You Draw ! Scissors meets Scissors";
    }
}

function game() {
    for (let i=0; i < 5; i++) {
        let playerSelection = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
        console.log("You choose: " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1));
        let computerSelection = computerPlay();
        let result = playRPS(computerSelection, playerSelection);
        console.log(result);
    }

    if (playerScore > computerScore) {
        console.log("Congrats, You are the Winner");
    } else if (playerScore == computerScore) {
        console.log("You draw with Computer");
    } else {
        console.log("Sorry, Computer Wins")
    }
}

game();