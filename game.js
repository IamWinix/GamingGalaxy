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

// Define the ball properties
var ball = {
  x: 40,
  y: 40,
  radius: 10,
  color: "#ff0000"
};

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

// Draw the ball
function drawBall() {
  context.beginPath();
  context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  context.fillStyle = ball.color;
  context.fill();
  context.closePath();
}

// Move the ball
function moveBall(dx, dy) {
  // Calculate the new position
  var newX = ball.x + dx;
  var newY = ball.y + dy;

  // Check if the new position is within the maze bounds and not a wall
  var row = Math.floor(newY / cellSize);
  var col = Math.floor(newX / cellSize);
  if (
    row >= 0 &&
    row < maze.length &&
    col >= 0 &&
    col < maze[row].length &&
    maze[row][col] !== 1
  ) {
    ball.x = newX;
    ball.y = newY;
  }
}

// Handle keydown event to move the ball
document.addEventListener("keydown", function(event) {
  var dx = 0;
  var dy = 0;

  switch (event.keyCode) {
    case 37: // Left arrow key
      dx = -cellSize;
      break;
    case 38: // Up arrow key
      dy = -cellSize;
      break;
    case 39: // Right arrow key
      dx = cellSize;
      break;
    case 40: // Down arrow key
      dy = cellSize;
      break;
  }

  moveBall(dx, dy);
});

// Game loop
function gameLoop() {
  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the maze
  drawMaze();

  // Draw the ball
  drawBall();

  // Request the next animation frame
  requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();
