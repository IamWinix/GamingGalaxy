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
