// return either "rock", "paper", or "scissors" randomly
function computerPlay () {
    let randomNumber = Math.floor(Math.random() * 3);
    return (randomNumber === 0) ? "rock" :
        (randomNumber === 1) ? "paper" :
        "scissors";
}

// return who won
function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "tie";
        } else if (computerSelection === "paper") {
            return "win";
        } else {
            return "loss";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "win";
        } else if (computerSelection === "paper") {
            return "tie";
        } else {
            return "loss";
        }
    } else {
        if (computerSelection === "rock") {
            return "loss";
        } else if (computerSelection === "paper") {
            return "win";
        } else {
            return "tie";
        }
    }
}

// play 5 matches and print the winner
function game() {

    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {

        let playerSelection = prompt("Choose rock, paper, or scissors").toLowerCase();

        // make sure receive correct input
        while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
            playerSelection = prompt(("Choose rock, paper, or scissors").toLowerCase())
        }
    
        let computerSelection = computerPlay();
        let round = playRound(playerSelection, computerSelection);

        if (round === "win") {
            playerScore++;
        } else if (round === "loss") {
            computerScore++;
        }

        console.log(`You chose ${playerSelection} & the computer chose ${computerSelection}`);
        console.log("result: " + round);
        console.log("player score: " + playerScore);
        console.log("computer score: " + computerScore);
    }

    if (computerScore > playerScore) {
        console.log("The computer won the game!")
    } else if (computerScore < playerScore) {
        console.log("You won the game!")
    } else {
        console.log("You tied the game!")
    }
}


console.log(game());