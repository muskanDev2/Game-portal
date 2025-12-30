// JavaScript logic for Tic Tac Toe

// Select all buttons on the board
const buttons = document.querySelectorAll(".board button");
const gameStatus = document.getElementById("game-status");
const resetBtn = document.getElementById("reset-btn");

// Variables to track the game state
let currentPlayer = "X"; // Player X starts
let board = ["", "", "", "", "", "", "", "", ""]; // Empty board
let gameActive = true;

// Winning combinations
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Function to check for a winner
function checkWinner() {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; // Return the winner (X or O)
    }
  }
  return null; // No winner yet
}

// Function to check for a draw
function checkDraw() {
  return board.every(cell => cell !== "");
}

// Function to handle a button click
function handleButtonClick(event) {
  const index = Array.from(buttons).indexOf(event.target);

  // If the cell is already filled or the game is over, do nothing
  if (board[index] || !gameActive) {
    return;
  }

  // Update the board and the button text
  board[index] = currentPlayer;
  event.target.textContent = currentPlayer;

  // Check for a winner
  const winner = checkWinner();
  if (winner) {
    // alert-success: Green alert for win states - clearly indicates successful outcome
    gameStatus.className = "alert alert-success text-center";
    gameStatus.textContent = `Player ${winner} wins!`;
    gameActive = false;
    return;
  }

  // Check for a draw
  if (checkDraw()) {
    // alert-warning: Yellow/orange alert for draw states - neutral outcome, not a win
    gameStatus.className = "alert alert-warning text-center";
    gameStatus.textContent = "It's a draw!";
    gameActive = false;
    return;
  }

  // Switch to the next player
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  // alert-warning: Yellow/orange alert for turn states - neutral/informational state
  gameStatus.className = "alert alert-warning text-center";
  gameStatus.textContent = `Player ${currentPlayer}'s turn`;
}

// Function to reset the game
function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  currentPlayer = "X";
  // Reset to warning alert (neutral state) when game resets
  gameStatus.className = "alert alert-warning text-center";
  gameStatus.textContent = "Player X's turn";
  buttons.forEach(button => (button.textContent = ""));
}

// Add event listeners to the buttons
buttons.forEach(button => button.addEventListener("click", handleButtonClick));
resetBtn.addEventListener("click", resetGame);
