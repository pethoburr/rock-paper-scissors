const btn = document.querySelectorAll('[data-selection]');
const finalColumn = document.querySelector('[data-final-column]');
const computerScoreSpan = document.querySelector('[data-computer-score]');
const yourScoreSpan = document.querySelector('[data-your-score]');
const newGame = document.createElement('button');
const message = document.querySelector('[data-postgame-message]');
newGame.textContent = 'Play again';
newGame.classList.add('button');
const winText = document.createElement('div');
winText.textContent = 'YOU WIN!!!';
winText.classList.add('message');
const loseText = document.createElement('div');
loseText.textContent = 'HAHA SUCKER YOU LOSE!!!';
loseText.classList.add('message');
const div = document.createElement('div');
const outcome = document.createElement('div');
let yourCounter = 0;
let cpuCounter = 0;
const SELECTIONS = [
   {
      name: 'rock',
      beats: 'scissors'
   },
   {
      name: 'paper',
      beats: 'rock',
   },
   {
      name: 'scissors',
      beats: 'paper'
   }
];
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
    return SELECTIONS[randomIndex];
}

btn.forEach(btn => {
      btn.addEventListener('click', e => {
         if (yourCounter >= 5 || cpuCounter >= 5) {
            return;
         }
         const selectionName = btn.dataset.selection;
         const selection = SELECTIONS.find(selection => selection.name === selectionName);
         playGame(selection);
      })
   })
   
  
function playGame(selection) {
   const computerChoice = getComputerChoice();
   const yourWinner = winner(selection, computerChoice);
   const computerWinner = winner(computerChoice, selection);
   addSelectionResult(computerChoice, computerWinner);
   addSelectionResult(selection, yourWinner);
   if (yourWinner) {
      incrementScore(yourScoreSpan);
      youWin();
      yourCounter++;
   }
   else if (computerWinner) {
      incrementScore(computerScoreSpan);
      youLose();
      cpuCounter++;
   }
   else if (!yourWinner && !computerWinner) {
      draw();
   }
   if (yourCounter == 5) {
      message.after(winText);
      outcome.remove();
      finalColumn.after(div);
      playAgain();
      } 
   else if (cpuCounter == 5) {
      message.after(loseText);
      outcome.remove();
      finalColumn.after(div);
      playAgain();
   }
}

function incrementScore(scoreSpan) {
   scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

function addSelectionResult(selection) {
   const div = document.createElement('div');
   div.innerText = selection.name;
   div.classList.add('results');
   finalColumn.after(div);
}

function winner(selection, computerSelection) {
   return selection.beats === computerSelection.name;
}

function refreshPage() {
   window.location.reload(true);
}

function playAgain() {
   finalColumn.after(newGame);
   newGame.addEventListener('click', e => refreshPage());
}

function youWin() {
   outcome.classList.remove("loser");
   outcome.classList.remove("draw");
   outcome.classList.add('winner');
   outcome.textContent  = "ROUND WINNER!";
   message.after(outcome);
}

function youLose() {
   outcome.classList.remove("winner");
   outcome.classList.remove("draw");
   outcome.classList.add('loser');
   outcome.textContent = "ROUND LOSER!";
   message.after(outcome);
}

function draw() {
   outcome.classList.remove("winner");
   outcome.classList.remove("loser");
   outcome.classList.add('draw');
   outcome.textContent = "ROUND TIE";
   message.after(outcome);
}






