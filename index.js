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



const lastWinner = document.getElementById("last-winner");
let winnerTimeout;

function playGame(playerChoice) {
    const computer = weapons[Math.floor(Math.random() * weapons.length)];
   userChoice.textContent = `You chose: ${playerChoice}`;
   computerChoice.textContent = `Computer chose: ${computer}`;
   console.log(computer);
   if (playerChoice === computer) {
   winner.textContent = "It's a tie!";
roundWinner = "Tie";}
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
clearTimeout(winnerTimeout);
 


winnerTimeout = setTimeout(() => {
lastWinner.textContent = "";
    
}, 1000);

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


function resetGame(roundWinner) {
    if (playerPoints >= 5 || computerPoints >= 5) {
         lastWinner.textContent = `Last round winner: ${roundWinner}`;
        playerPoints = 0;
        computerPoints = 0;

        playerScore.textContent = `You: ${playerPoints}`;
        computerScore.textContent = `Computer: ${computerPoints}`;
    }
}
