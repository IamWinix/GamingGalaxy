const player = document.getElementById('player');
const ball = document.getElementById('ball');
const goal = document.getElementById('goal');
const interactButton = document.getElementById('interact-button');
const backgroundMusic = document.getElementById('background-music');

let playerPosition = 0;

function startGame() {
  interactButton.style.display = 'none';
  player.style.display = 'block';
  ball.style.display = 'block';
  backgroundMusic.play();

  loadStage(1);
}

function loadStage(stage) {
  clearStage();

  switch (stage) {
    case 1:
      // Code to set up and display Stage 1
      player.style.backgroundColor = 'red';
      break;
    case 2:
      // Code to set up and display Stage 2
      player.style.backgroundColor = 'green';
      break;
    // Add more cases for additional stages

    default:
      console.log("Invalid stage number");
  }
}

function clearStage() {
  player.style.backgroundColor = '';
}

document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowLeft') {
    playerPosition -= 10;
    player.style.left = playerPosition + 'px';
  } else if (event.code === 'ArrowRight') {
    playerPosition += 10;
    player.style.left = playerPosition + 'px';
  }

  // Check if the ball reached the goal
  if (playerPosition >= goal.offsetLeft && playerPosition + player.offsetWidth <= goal.offsetLeft + goal.offsetWidth) {
    // Ball reached the goal, do something
    console.log("Ball reached the goal!");
  }
});

ball.addEventListener('mousedown', (event) => {
  const initialX = event.clientX;
  const initialY = event.clientY;

  const ballRect = ball.getBoundingClientRect();
  const ballOffsetX = initialX - ballRect.left;
  const ballOffsetY = initialY - ballRect.top;

  function moveBall(event) {
    const newX = event.clientX - ballOffsetX;
    const newY = event.clientY - ballOffsetY;

    ball.style.left = newX + 'px';
    ball.style.top = newY + 'px';
  }

  function stopMovingBall() {
    document.removeEventListener('mousemove', moveBall);
    document.removeEventListener('mouseup', stopMovingBall);
  }

  document.addEventListener('mousemove', moveBall);
  document.addEventListener('mouseup', stopMovingBall);
});

interactButton.addEventListener('click', startGame);

// Get canvas element and context
const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

// Load images
const mansionImage = new Image();
mansionImage.src = "scary_mansion.jpg"; // Replace with your image file

// Define maze blocks
const wallColor = "#000000"; // Color for walls
const blockWidth = 40;
const blockHeight = 40;

// Define maze layout
const maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

// Draw maze and mansion background
function draw() {
    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw mansion background
    context.drawImage(mansionImage, 0, 0, canvas.width, canvas.height);

    // Draw maze blocks
    for (let row = 0; row < maze.length; row++) {
        for (let col = 0; col < maze[row].length; col++) {
            if (maze[row][col] === 1) {
                context.fillStyle = wallColor;
                context.fillRect(col * blockWidth, row * blockHeight, blockWidth, blockHeight);
            }
        }
    }
}

// Call draw function to start the game
draw();
