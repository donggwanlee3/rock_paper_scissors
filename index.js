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

function playGame() {
    var humanScore = 0;
    var computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (computerChoice == "rock") {
            if (humanChoice == "paper") {
                console.log("You win! Paper beats rock");
                humanScore += 1;
            } else if (humanChoice == "scissors") {
                console.log("You lose, Rock beats scissors");
                computerScore += 1;
            } else {
                console.log("Tied");
            }
        } else if (computerChoice == "scissors") {
            if (humanChoice == "rock") {
                console.log("You win! Rock beats scissors");
                humanScore += 1;
            } else if (humanChoice == "paper") {
                console.log("You lose, Scissors beats paper");
                computerScore += 1;
            } else {
                console.log("Tied");
            }
        } else if (computerChoice == "paper") {
            if (humanChoice == "scissors") {
                console.log("You win! Scissors beats paper");
                humanScore += 1;
            } else if (humanChoice == "rock") {
                console.log("You lose, Paper beats rock");
                computerScore += 1;
            } else {
                console.log("Tied");
            }
        }
    }
    
    for (let i = 0; i < 5; i++) { 
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
}
playGame()