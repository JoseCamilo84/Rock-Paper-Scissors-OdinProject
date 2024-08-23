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

function getHumanChoice() {
  let choice = Number(prompt('Ingresa tu elección: (1 es Piegra, 2 es Papel, 3 es Tijera)'));
  let humanChoice = '';

  if (choice < 1 || choice > 3) {
    console.log('Ingresa una opción correcta');
    return;
  } else if (choice === 1) {
    humanChoice = 'Piedra';
  } else if (choice === 2) {
    humanChoice = 'Papel';
  } else {
    humanChoice = 'Tijera';
  }
  return humanChoice;
}

function playRound(computerScore, humanScore) {
  let computerSelection =  getComputerChoice();
  let humanSelection = getHumanChoice();

  if (computerSelection === 'Piedra' && humanSelection === 'Papel') {
    console.log('!Ganaste¡, Papel gana a Piedra');
    humanScore = humanScore + 1;
  } else if (computerSelection === 'Piedra' && humanSelection === 'Tijera') {
    console.log('!Perdiste¡, Piedra gana a Tijera');
    computerScore = computerScore + 1;
  } else if (computerSelection === 'Papel' && humanSelection === 'Piedra') {
    console.log('!Perdiste¡, Papel gana a Piedra');
    computerScore = computerScore + 1;
  } else if (computerSelection === 'Papel' && humanSelection === 'Tijera') {
    console.log('!Ganaste¡, Tijera gana a Papel');
    humanScore = humanScore + 1;
  } else if (computerSelection === 'Tijera' && humanSelection === 'Piedra') {
    console.log('!Ganaste¡, Piedra gana a Tijera');
    humanScore = humanScore + 1;
  } else if (computerSelection === 'Tijera' && humanSelection === 'Papel') {
    console.log('!Perdiste¡, Tijera gana a Papel');
    computerScore = computerScore + 1;
  } else if (computerSelection === humanSelection) {
    console.log('!Empate¡');
  }
  console.log('Jugador: ' + humanScore, 'Computador: ' + computerScore);
}

let computerScore = 0;
let humanScore = 0;

function playGame() {

  playRound(computerScore, humanScore);
  playRound(computerScore, humanScore);
  // playRound(computerScore, humanScore);
  // playRound(computerScore, humanScore);
}


playGame();