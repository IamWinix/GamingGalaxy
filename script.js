// Get the ball, goal, interact button, audio elements, and settings elements
const ball = document.querySelector('.ball');
const goal = document.querySelector('.goal');
const interactButton = document.getElementById('interact-button');
const backgroundMusic = document.getElementById('background-music');
const soundRange = document.getElementById('sound-range');
const musicRange = document.getElementById('music-range');

// Set the initial position of the ball and goal
let ballPosition = 0;

// Move the ball left
function moveLeft() {
  if (ballPosition > 0) {
    ballPosition--;
    updateBallPosition();
    checkCollision();
  }
}

// Move the ball right
function moveRight() {
  if (ballPosition < 3) {
    ballPosition++;
    updateBallPosition();
    checkCollision();
  }
}

// Update the ball's position based on the ballPosition variable
function updateBallPosition() {
  ball.style.gridColumn = ballPosition + 1;
}

// Check for collision between ball and goal
function checkCollision() {
  if (ballPosition === 3 && ball.style.gridRow === goal.style.gridRow) {
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

// Play or pause background music
interactButton.addEventListener('click', function() {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
  } else {
    backgroundMusic.pause();
  }
});

// Adjust sound volume
soundRange.addEventListener('input', function() {
  const volume = parseFloat(soundRange.value);
  ball.style.opacity = volume;
});

// Adjust music volume
musicRange.addEventListener('input', function() {
  const volume = parseFloat(musicRange.value);
  backgroundMusic.volume = volume;
});
