function getComputerChoice() {
    let random = Math.floor(Math.random() * 3 +1);
    switch (random) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3: 
            return "scissors"
            break;
    }
}


function game() {
    for (let i=1; i<=5; i++) {

        do {
            playerSelection = prompt("Please choose either rock, paper, or scissors: ");
            playerSelection = playerSelection.toLowerCase();
        } while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors");

        let computerSelection = getComputerChoice();

        function playRound(playerSelection, ComputerSelection) {
             if (playerSelection === "rock" && computerSelection === "rock") {
                return "Both choosed rock, it's a tie!";
            } else if (playerSelection === "rock" && computerSelection === "scissors") {
                return "Rock beats scissor, you won!";
            } else if (playerSelection === "rock" && computerSelection === "paper") {
                return "The rock is wrapped by the paper, sorry you lose!";
            } else if (playerSelection === "paper" && computerSelection === "rock") {
                return "You wrapped the rock, you won!";
            } else if (playerSelection === "paper" && computerSelection === "paper") {
                return "Both choosed paper, it's a tie!";
            } else if (playerSelection === "paper" && computerSelection === "scissors") {
                return"Ooops the enemy uses its scissor, you lose!";
            } else if (playerSelection === "scissors" && computerSelection === "rock") {
                return "you were smashed by the rock";
            } else if (playerSelection === "scissors" && computerSelection === "paper") {
                return "Congrats you cut the paper!";
            } else if (playerSelection === "scissors" && computerSelection === "scissors") {
                return "A scissor can't beat a scissor, it's a tie!";
            }
        }

        console.log(playRound(playerSelection, computerSelection));


    }
    
}




/*
function playRound(playerSelection, ComputerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "rock") {
        return "Both choosed rock, it's a tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Rock beats scissor, you won!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "The rock is wrapped by the paper, sorry you lose!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You wrapped the rock, you won!";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Both choosed paper, it's a tie!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return"Ooops the enemy uses its scissor, you lose!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "you were smashed by the rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Congrats you cut the paper!";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "A scissor can't beat a scissor, it's a tie!";
    }
}

let playerSelection = "PaPER";
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
*/