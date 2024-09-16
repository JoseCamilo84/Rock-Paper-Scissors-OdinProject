function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  let computerChoice = '';

  if (choice === 0) {
    computerChoice = 'Piedra';
  } else if (choice === 1) {
    computerChoice = 'Papel';
  } else {
    computerChoice = 'Tijera';
  }
  return computerChoice;
}

function playRound(humanSelection) {

  let computerSelection =  getComputerChoice();
  let roundWinner = '';

  if (computerSelection === 'Piedra' && humanSelection === 'Papel') {
    results.textContent = '!Ganaste¡, Papel gana a Piedra';
    roundWinner = 'Human';
  } else if (computerSelection === 'Piedra' && humanSelection === 'Tijera') {
    results.textContent = '!Perdiste¡, Piedra gana a Tijera';
    roundWinner = 'Computer';
  } else if (computerSelection === 'Papel' && humanSelection === 'Piedra') {
    results.textContent = '!Perdiste¡, Papel gana a Piedra';
    roundWinner = 'Computer';
  } else if (computerSelection === 'Papel' && humanSelection === 'Tijera') {
    results.textContent = '!Ganaste¡, Tijera gana a Papel';
    roundWinner = 'Human';
  } else if (computerSelection === 'Tijera' && humanSelection === 'Piedra') {
    results.textContent = '!Ganaste¡, Piedra gana a Tijera';
    roundWinner = 'Human';
  } else if (computerSelection === 'Tijera' && humanSelection === 'Papel') {
    results.textContent = '!Perdiste¡, Tijera gana a Papel';
    roundWinner = 'Computer';
  } else if (computerSelection === humanSelection) {
    results.textContent = '!Draw';
  }
  conditionalScore(roundWinner);
}

function conditionalScore(winner) {
  if (winner === 'Human') {
    humanSpan.textContent = ++humanScore;
  }
  else if (winner === 'Computer') {
    computerSpan.textContent = ++computerScore;
  }
  if (humanScore === 5 || computerScore === 5) {
    results.textContent = 'Winner!!! ' + winner;
  }
}

function playGame() {
  rockBtn.addEventListener('click', () => playRound('Piedra'));

  paperBtn.addEventListener('click', () => playRound('Papel'));
  
  scissorsBtn.addEventListener('click', () => playRound('Tijera'));
}

let computerScore = 0;
let humanScore = 0;
let winner = '';

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

const humanSpan = document.querySelector('#humanScore');
const computerSpan = document.querySelector('#computerScore');
const results = document.querySelector('#results');

playGame();