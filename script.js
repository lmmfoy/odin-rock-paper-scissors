// return either "rock", "paper", or "scissors" randomly
function computerPlay () {
    let randomNumber = Math.floor(Math.random() * 3);
    return (randomNumber === 0) ? "rock" :
        (randomNumber === 1) ? "paper" :
        "scissors";
}

// return who won
function playRound(playerSelection, computerSelection) {

    console.log(playerSelection);

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "tied";;
        } else if (computerSelection === "paper") {
            return "lost";
        } else {
            return "won";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "won";
        } else if (computerSelection === "paper") {
            return "tied";
        } else {
            return "lost";
        }
    } else {
        if (computerSelection === "rock") {
            return "lost";
        } else if (computerSelection === "paper") {
            return "won";
        } else {
            return "tied";
        }
    }


}

let computerScore = 0;
let playerScore = 0;
const buttons = document.querySelectorAll("button");
let round;
let playerSelection;

// play game based on what button user clicks, return results
buttons.forEach((button) => {
    button.addEventListener("click", function(e){
            const computerSelection = computerPlay();
            round = playRound(e.target.id, computerSelection);
            playerSelection = e.target.id;

            if (round === "won") {
                playerScore++;
            } else if (round === "lost") {
                computerScore++;
            }

            document.getElementById("results").textContent = `
You chose ${playerSelection} & the computer chose ${computerSelection}
This round: you ${round}! 
Player score: ${playerScore}
Computer score: ${computerScore}`;

            // clear last game's results
            if (document.getElementById("end").textContent !== "") {
                document.getElementById("end").textContent = "";
            }

            if (playerScore == 5) {
                document.getElementById("end").textContent = "You won the game!";
                playerScore = 0;
                computerScore = 0;
            } else if (computerScore == 5) {
                document.getElementById("end").textContent = "The computer won the game!"
                playerScore = 0;
                computerScore = 0;
            }

    })
});


