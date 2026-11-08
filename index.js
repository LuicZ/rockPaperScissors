const weapons = ["rock", "paper", "scissors"];
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const computer = weapons[Math.floor(Math.random() * weapons.length)];

function playGame(playerChoice) {
    if (playerChoice === computer) {
        console.log("It's a tie!");
    }
}
