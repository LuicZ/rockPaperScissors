const weapons = ["rock", "paper", "scissors"];
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const userChoice = document.getElementById("user");
const computerChoice = document.getElementById("computer")
const winner = document.querySelector(".winner");
const beats = {
    "rock": "scissors",
    "scissors": "paper",
    "paper": "rock"
};
const matchWinner = document.getElementById("match-winner");
const resetButton = document.getElementById("reset");



function playGame(playerChoice) {
    const computer = weapons[Math.floor(Math.random() * weapons.length)];
   userChoice.textContent = `You chose: ${playerChoice}`;
   computerChoice.textContent = `Computer chose: ${computer}`;
   console.log(computer);
   if (playerChoice === computer) {
   winner.textContent = "It's a tie!";
}

    else if (beats[playerChoice] === computer) {
    winner.textContent = "You win!";
    playerPoints++;
    playerScore.textContent = `You: ${playerPoints}`;
    roundWinner = "You";
   }
    else {
        winner.textContent = "Computer wins!";
        computerPoints++;
        computerScore.textContent = `Computer: ${computerPoints}`;
        roundWinner = "Computer";
    }
 




    resetGame(roundWinner);

}


rock.addEventListener("click", () => {
   playGame("rock");
});

paper.addEventListener("click", () => {
   playGame("paper");
});

scissors.addEventListener("click", () => {
   playGame("scissors");

});

const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
let playerPoints = 0;
let computerPoints = 0;


function resetGame(matchWinner) { // Reset the game if either player reaches 5 points//

    if (playerPoints >= 5 || computerPoints >= 5) {
         matchWinner.textContent = `Match winner: ${matchWinner}`;
       const rock = document.getElementById("rock");
       const paper = document.getElementById("paper");
         const scissors = document.getElementById("scissors");
         rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
            resetButton.style.display = "block"; // Show the reset button when the match ends
       newGame();

       /* playerScore.textContent = `You: ${playerPoints}`;
        computerScore.textContent = `Computer: ${computerPoints}`;*/
    }
}

function newGame() {
    resetButton.addEventListener("click", () => {
        playerPoints = 0;
        computerPoints = 0;
         resetButton.style.display = "none"; // Hides the reset button until the match ends 
        playerScore.textContent = `You: ${playerPoints}`;
        computerScore.textContent = `Computer: ${computerPoints}`;
        matchWinner.textContent = "";
        winner.textContent = "";
        const rock = document.getElementById("rock");
        const paper = document.getElementById("paper");
        const scissors = document.getElementById("scissors");
        rock.disabled = false;
        paper.disabled = false;
        scissors.disabled = false;
        
    });
}