// JavaScript code for the game logic

// Get the game canvas element
var canvas = document.getElementById("game-canvas");
var context = canvas.getContext("2d");

// Set the canvas size
canvas.width = 400;
canvas.height = 400;

// Define the maze structure
var maze = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 1, 0, 1, 0, 1],
  [1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

// Define the cell size and wall color
var cellSize = 40;
var wallColor = "#333";

// Draw the maze
function drawMaze() {
  for (var row = 0; row < maze.length; row++) {
    for (var col = 0; col < maze[row].length; col++) {
      var cell = maze[row][col];
      var x = col * cellSize;
      var y = row * cellSize;

      if (cell === 1) {
        context.fillStyle = wallColor;
        context.fillRect(x, y, cellSize, cellSize);
      }
    }
  }
}

// Draw the maze initially
drawMaze();
