// Get the player and goal elements
const player = document.getElementById('player');
const goal = document.getElementById('goal');

// Set the initial position of the player and goal
let playerLeft = 0;
let goalLeft = 200;

// Move the player left
function moveLeft() {
  playerLeft -= 50;
  player.style.left = playerLeft + 'px';
  checkCollision();
}

// Move the player right
function moveRight() {
  playerLeft += 50;
  player.style.left = playerLeft + 'px';
  checkCollision();
}

// Check for collision between player and goal
function checkCollision() {
  if (playerLeft === goalLeft) {
    alert('Congratulations! You reached the goal!');
  }
}

// Event listeners for arrow key presses
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    moveLeft();
  } else if (event.key === 'ArrowRight') {
    moveRight();
  }
});
