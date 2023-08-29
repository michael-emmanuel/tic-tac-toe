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

function drawGrid(xMoves, oMoves) {
  drawVerticalLines(xMoves[0], oMoves[0]);
  drawHorizontalLine();
  drawVerticalLines(xMoves[1], oMoves[1]);
  drawHorizontalLine();
  drawVerticalLines(xMoves[2], oMoves[2]);
}

function drawVerticalLines(xMoves, oMoves) {
  let space1Char = xMoves[0] ? 'X' : oMoves[0] ? 'O' : ' ';
  let space2Char = xMoves[1] ? 'X' : oMoves[1] ? 'O' : ' ';
  let space3Char = xMoves[2] ? 'X' : oMoves[2] ? 'O' : ' ';

  console.log(` ${space1Char} | ${space2Char} | ${space3Char} `);
}

function drawHorizontalLine() {
  console.log('---+---+---');
}

startGame()