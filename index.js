function getComputerChoice() {
    const number = 3 * Math.random();
    if (number <= 1) {
        return "rock"
    } else if (number <= 2) {
        return "scissors"
    } else {
        return "paper"
    }
}

function getHumanChoice() {
    const choice = prompt("Please enter your choice (rock, paper, or scissors):");
    return choice.toLowerCase();
}

// function playGame() {
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
    let result = "";
    if (computerChoice == "rock") {
        if (humanChoice == "paper") {
            result = "You win! Paper beats rock";
            humanScore += 1;
        } else if (humanChoice == "scissors") {
            result = "You lose, Rock beats scissors";
            computerScore += 1;
        } else {
            result = "Tied";
        }
    } else if (computerChoice == "scissors") {
        if (humanChoice == "rock") {
            result = "You win! Rock beats scissors";
            humanScore += 1;
        } else if (humanChoice == "paper") {
            result = "You lose, Scissors beats paper";
            computerScore += 1;
        } else {
            result = "Tied";
        }
    } else if (computerChoice == "paper") {
        if (humanChoice == "scissors") {
            result = "You win! Scissors beats paper";
            humanScore += 1;
        } else if (humanChoice == "rock") {
            result = "You lose, Paper beats rock";
            computerScore += 1;
        } else {
            result = "Tied";
        }
    }
    const resultDiv = document.getElementById("results");
    const scoreDiv = document.getElementById("score");
    resultDiv.innerHTML += `<p>${result}</p>`
    scoreDiv.textContent =  `Human: ${humanScore} - Computer: ${computerScore}`;
    if (humanScore == 5 || computerScore == 5) {
        if (humanScore == 5) {
            console.log("You win ~!")
        }
        if (computerScore == 5) {
            console.log("Computer win ~!")
        }
    }
}
    
//     for (let i = 0; i < 5; i++) { 
//         const humanChoice = getHumanChoice();
//         const computerChoice = getComputerChoice();
//         playRound(humanChoice, computerChoice);
//     }
//  }

 document.getElementById("rock").addEventListener("click", () =>
    playRound("rock", getComputerChoice())
    )
document.getElementById("scissors").addEventListener("click", () =>
    playRound("scissors", getComputerChoice())
    )
document.getElementById("paper").addEventListener("click", () =>
    playRound("paper", getComputerChoice())
    )
// playGame()