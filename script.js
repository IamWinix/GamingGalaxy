// Get the ball, goal, interact button, and audio elements
const ball = document.getElementById('ball');
const goal = document.getElementById('goal');
const interactButton = document.getElementById('interact-button');
const backgroundMusic = document.getElementById('background-music');

// Set the initial position of the ball and goal
let ballLeft = 0;
let goalLeft = 200;

// Move the ball left
function moveLeft() {
  ballLeft -= 50;
  ball.style.left = ballLeft + 'px';
  checkCollision();
}

// Move the ball right
function moveRight() {
  ballLeft += 50;
  ball.style.left = ballLeft + 'px';
  checkCollision();
}

// Check for collision between ball and goal
function checkCollision() {
  if (ballLeft === goalLeft) {
    alert('Congratulations!});
