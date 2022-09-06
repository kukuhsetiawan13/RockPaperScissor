function getComputerChoice() 
{
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


let playerCounter = 0;
let computerCounter = 0;


function playRound(playerSelection, computerSelection) 
{
            
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "rock") {
        return "Both choosed rock, it's a tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerCounter++;
        return "Rock beats scissor, you won!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerCounter++;
        return "The rock is wrapped by the paper, sorry you lose!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerCounter++;
        return "You wrapped the rock, you won!";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Both choosed paper, it's a tie!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerCounter++;
        return"Ooops the enemy uses its scissor, you lose!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerCounter++;
        return "You were smashed by the rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerCounter++;
        return "Congrats you cut the paper!";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "A scissor can't beat a scissor, it's a tie!";
    }
}



// Add a div container for 3 buttons
const containerForButtons = document.createElement("div");
document.body.appendChild(containerForButtons);


// Create 3 buttons and naming them with rock, paper, and scissors
for (let i=1; i<=3; i++)
{
    const container = document.querySelector("div");
    const btn = document.createElement("button");
    btn.setAttribute("id", `${i}`);
        
    container.appendChild(btn);
}

document.getElementById("1").textContent = "Rock";
document.getElementById("2").textContent = "Paper";
document.getElementById("3").textContent = "Scissors";


// Add a functionality to each button so that when it's clicked, function playRound is executed
const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
{
    button.addEventListener("click", (e) =>
    {
        // Choose player selection based on which button is clicked
        if (e.target.id === "1") {
            playerSelection = "rock";
        } else if(e.target.id  === "2") {
            playerSelection = "paper";
        } else if (e.target.id  === "3") {
            playerSelection= "scissors";
        }
       

        // Choose computer selection
        let computerSelection = getComputerChoice();

        // Print win/lose text, player's counter, and winner's counter
        text.textContent = playRound(playerSelection, computerSelection);
        player.textContent = playerCounter;
        computer.textContent = computerCounter;


    });
});


// Create another div below "div for buttons"
const containerForText = document.createElement("div");
document.body.appendChild(containerForText);

    // Create first nested div to print text if win or lose
    const text = document.createElement("div");
    containerForText.appendChild(text);
    
    // Created second nested div as a container for player's & computer's counters
    const containerForCounter = document.createElement("div");
    containerForText.appendChild(containerForCounter);

        // Player's counter
        const player = document.createElement("div");
        containerForCounter.appendChild(player);

        // Computer's counter
        const computer = document.createElement("div");
        containerForCounter.appendChild(computer);
