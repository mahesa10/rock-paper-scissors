const RPS = ["rock", "paper", "scissors"];

function computerPlay() {
    let randomNum = Math.floor(Math.random() * RPS.length);
    return RPS[randomNum]
}

let playerScore = 0;
let computerScore = 0;

function displayScoreAndWinner() {
    const playerScoreDisplay = document.querySelector('#player-score');
    const computerScoreDisplay = document.querySelector('#computer-score');

    playerScoreDisplay.textContent = `Your Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

    const winnerDisplay = document.querySelector('#winner')
    if (playerScore === 5) {
        winnerDisplay.textContent = "Congrats! You are the Winner";
    } else if (computerScore === 5) {
        winnerDisplay.textContent = "Sorry, Computer Wins";
    }
}

function playRound(e) {
    let playerSelection = e.target.id;
    let computerSelection = computerPlay();
    let result = document.querySelector(".result");

    if (computerSelection === "rock" && playerSelection === "paper") {
        playerScore++
        result.textContent = "You Won! Paper beats Rock";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore++
        result.textContent = "You Lose! Rock beats Scissors";
    } else if (computerSelection === "rock" && playerSelection === "rock") {
        result.textContent = "You Draw ! Rock meets Rock";
    }
    
    if (computerSelection === "paper" && playerSelection === "scissors") {
        playerScore++
        result.textContent = "You Won! Scissors beats Paper";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore++
        result.textContent = "You Lose! Paper beats Rock";
    } else if (computerSelection === "paper" && playerSelection === "paper") {
        result.textContent = "You Draw ! Paper meets Paper";
    }
    
    if (computerSelection === "scissors" && playerSelection === "rock") {
        playerScore++
        result.textContent = "You Won! Rock beats Scissors";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        computerScore++
        result.textContent = "You Lose! Scissors beats Paper";
    } else if (computerSelection === "scissors" && playerSelection === "scissors") {
        result.textContent = "You Draw ! Scissors meets Scissors";
    }

    displayScoreAndWinner();
}

const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
    btn.addEventListener('click', playRound)
})