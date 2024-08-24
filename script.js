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
  let choice = prompt('Ingresa tu elección:');
  let humanChoice = '';

  if (choice.toLowerCase() != 'piedra' && choice.toLowerCase() != 'papel' && choice.toLowerCase() != 'tijera') {
    console.log('Ingresa una opción correcta');
    return;
  } else if (choice.toLowerCase() === 'piedra') {
    humanChoice = 'Piedra';
  } else if (choice.toLowerCase() === 'papel') {
    humanChoice = 'Papel';
  } else {
    humanChoice = 'Tijera';
  }
  return humanChoice;
}

function playRound() {
  let computerSelection =  getComputerChoice();
  let humanSelection = getHumanChoice();
  let roundWinner = '';

  if (computerSelection === 'Piedra' && humanSelection === 'Papel') {
    console.log('!Ganaste¡, Papel gana a Piedra');
    roundWinner = 'Human';
  } else if (computerSelection === 'Piedra' && humanSelection === 'Tijera') {
    console.log('!Perdiste¡, Piedra gana a Tijera');
    roundWinner = 'Computer';
  } else if (computerSelection === 'Papel' && humanSelection === 'Piedra') {
    console.log('!Perdiste¡, Papel gana a Piedra');
    roundWinner = 'Computer';
  } else if (computerSelection === 'Papel' && humanSelection === 'Tijera') {
    console.log('!Ganaste¡, Tijera gana a Papel');
    roundWinner = 'Human';
  } else if (computerSelection === 'Tijera' && humanSelection === 'Piedra') {
    console.log('!Ganaste¡, Piedra gana a Tijera');
    roundWinner = 'Human';
  } else if (computerSelection === 'Tijera' && humanSelection === 'Papel') {
    console.log('!Perdiste¡, Tijera gana a Papel');
    roundWinner = 'Computer';
  } else if (computerSelection === humanSelection) {
    console.log('!Empate¡');
  }
  return roundWinner;
}

function conditionalScore(winner) {
  if (winner === 'Human') {
    humanScore++;
  } else if (winner === 'Computer') {
    computerScore++;
  }
}

function playGame() {
  
  for (let i = 1; i <= 5; i++) {
    winner = playRound();
    conditionalScore(winner);
  }
  
  console.log('Jugador: ' + humanScore, 'Computador: ' + computerScore);
}

let computerScore = 0;
let humanScore = 0;
let winner = '';

playGame();