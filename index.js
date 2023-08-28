import readline from 'readline';

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function displayPrompt(string) {
  return new Promise(resolve => {
    rl.question(string, resolve)
  })
}

let gameIsOver = false;
let currentPlayer = 'Player X';
let playerXMoves = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
let playerOMoves = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

async function startGame() {
  while (!gameIsOver) {
    console.log();

    drawGrid(playerXMoves, playerOMoves);

    console.log();

    let response = await displayPrompt(`${currentPlayer}, please enter your next move: `)
    let [yMove, xMove] = response.split(',').map(x => Number(x));
  
    let currentPlayerMoves = currentPlayer === 'Player X' 
      ? playerXMoves
      : playerOMoves; 

    currentPlayerMoves[yMove][xMove] = 1

    // MAIN GAME LOGIC!!!
  
    currentPlayer = currentPlayer === 'Player X' ? 'Player O' : 'Player X';
  }
}

function drawGrid() {
  drawVerticalLines();
  drawHorizontalLine();
  drawVerticalLines();
  drawHorizontalLine();
  drawVerticalLines();
}

function drawVerticalLines() {
  console.log('   |   |   ');
}

function drawHorizontalLine() {
  console.log('---+---+---');
}

startGame()