function getComputerChoice() {
    var words = ["rock", "paper", "scissors"];
    var word = words[Math.floor(Math.random()*words.length)];
    return word;
}

function getPlayerChoice() {
   let playerchoice = prompt("Pick 1: rock, paper, scissors").toLowerCase();
   if (playerchoice === "rock") {
      return playerchoice = "rock";
   } else if (playerchoice === "paper") {
      return playerchoice = "paper";
   } else if (playerchoice === "scissors") {
      return playerchoice = "scissors";
   }
}

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice(); 
let playerscore = 0;
let cpuscore = 0;

function playRound(playerSelection, computerSelection) {
   if (playerSelection === computerSelection) {
      console.log("TIE");
   } else if (playerSelection === "rock" && computerSelection === "paper") {
      cpuscore++;
      return console.log("CPU WINS");
   } else if (playerSelection === "rock" && computerSelection === "scissors") {
      playerscore++;
      return console.log("YOU WIN");
   } else if (playerSelection === "paper" && computerSelection == "rock") {
      playerscore++;
      return console.log("YOU WIN");
   } else if (playerSelection === "paper" && computerSelection === "scissors") {
      cpuscore++;
      return console.log("CPU WIN");
   } else if (playerSelection === "scissors" && computerSelection === "rock") {
      cpuscore++;
      return console.log("CPU WIN");
   } else if (playerSelection === "scissors" && computerSelection === "paper") {
      playerscore++;
      return console.log("YOU WIN");
   }
}

function game() {
   for (let i = 0; i < 5; i++) {
      let play = getPlayerChoice();
      let cpu = getComputerChoice();
      console.log(playRound(play, cpu));
      console.log(`Player Score:${playerscore} | CPU score:${cpuscore} `)
   }
   if (playerscore > cpuscore) {
      return console.log("CONGRATS YOU WON");
   } else if (playerscore < cpuscore) {
      return console.log("YOU LOST LOSERRR");
   } else {
      return console.log("it was a draw lame");
   }
}

game()