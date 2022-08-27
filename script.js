function getComputerChoice() {
   let randomized = Math.floor(Math.random()*3 + 1);
   if (randomized === 1) {
    return "rock";
   } else if (randomized === 2) {
    return "paper";
   } else if (randomized === 3){
    return "scissor";
   }
} 

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "rock") {
        console.log("Both choosed rock, it's a tie!");
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        console.log("Rock beats scissor, you won!");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("The rock is wrapped by the paper, sorry you lose!");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You wrapped the rock, you won!");
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        console.log("Both choosed paper, it's a tie!")
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        console.log("Ooops the enemy uses its scissor, you lose!");
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        console.log("you were smashed by the rock");
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        console.log("Congrats you cut the paper!");
    } else if (playerSelection === "scissor" && computerSelection === "scissor") {
        console.log("A scissor can't beat a scissor, it's a tie!");
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));