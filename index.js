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

function playGame(playerChoice) {
    const computer = weapons[Math.floor(Math.random() * weapons.length)];
   computerChoice.textContent = computer;
   userChoice.textContent = `You chose: ${playerChoice}`;
   computerChoice.textContent = `Computer chose: ${computer}`;
   console.log(computer);
   if (playerChoice === computer) {
   winner.textContent = "It's a tie!"; }
   else if (beats[playerChoice] === computer) {
    winner.textContent = "You win!";
   }
    else {
        winner.textContent = "Computer wins!";
    }
};

rock.addEventListener("click", () => {
   playGame("rock");
});

paper.addEventListener("click", () => {
   playGame("paper");
});

scissors.addEventListener("click", () => {
   playGame("scissors");
});


