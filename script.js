const RPS = ["rock", "paper", "scissors"];
const rpsBtn = document.querySelectorAll('.rps-btn');
const headerDesc = document.querySelector('.header-desc')
const playAgainBtn = document.querySelector('#play-again-btn');
const result = document.querySelector("#result-text");
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const playerChoiceDisplay = document.querySelector('#player-choice');
const computerChoiceDisplay = document.querySelector('#computer-choice');

function computerPlay() {
    let randomNum = Math.floor(Math.random() * RPS.length);
    return RPS[randomNum]
}

let playerScore = 0;
let computerScore = 0;

function displayScoreAndWinner() {

    playerScoreDisplay.textContent = `${playerScore}`;
    computerScoreDisplay.textContent = `${computerScore}`;

    if (playerScore === 5) {
        headerDesc.textContent = "Congrats! You are the Winner";
        rpsBtn.forEach(btn => {
            btn.disabled = true;
        })
        playAgainBtn.hidden = false;
    } else if (computerScore === 5) {
        headerDesc.textContent = "Sorry, Computer Wins";
        rpsBtn.forEach(btn => {
            btn.disabled = true;
        })
        playAgainBtn.hidden = false;
    }
}

function showRPS(playerChoice, computerChoice) {
    playerChoiceDisplay.src = `./images/${playerChoice}.png`;
    computerChoiceDisplay.src = `./images/${computerChoice}.png`;
}

function playRound(e) {
    let playerSelection = e.currentTarget.value;
    let computerSelection = computerPlay();

    if (computerSelection === "rock" && playerSelection === "paper") {
        playerScore++
        result.textContent = "You Win!";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        computerScore++
        result.textContent = "You Lose!";
    } else if (computerSelection === "rock" && playerSelection === "rock") {
        result.textContent = "It's a tie!";
    }
    
    if (computerSelection === "paper" && playerSelection === "scissors") {
        playerScore++
        result.textContent = "You Win!";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        computerScore++
        result.textContent = "You Lose!";
    } else if (computerSelection === "paper" && playerSelection === "paper") {
        result.textContent = "It's a tie!";
    }
    
    if (computerSelection === "scissors" && playerSelection === "rock") {
        playerScore++
        result.textContent = "You Win!";
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        computerScore++
        result.textContent = "You Lose!";
    } else if (computerSelection === "scissors" && playerSelection === "scissors") {
        result.textContent = "It's a tie!";
    }

    displayScoreAndWinner();
    showRPS(playerSelection, computerSelection);
}

rpsBtn.forEach(btn => {
    btn.addEventListener('click', playRound);
})

function playAgain() {
    result.textContent = "";
    playerScore = 0;
    computerScore = 0;
    headerDesc.textContent = "First to 5 Wins!";
    rpsBtn.forEach(btn => {
        btn.disabled = false;
    });
    playAgainBtn.hidden = true;
    playerScoreDisplay.textContent = "0";
    computerScoreDisplay.textContent = "0";
    playerChoiceDisplay.src = "";
    computerChoiceDisplay.src = "";
}

playAgainBtn.addEventListener('click', playAgain);