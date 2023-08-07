const player = document.getElementById('player');
const interactButton = document.getElementById('interact-button');
const backgroundMusic = document.getElementById('background-music');

let currentStage = 1;

function startGame() {
  interactButton.style.display = 'none';
  player.style.display = 'block';
  backgroundMusic.play();
  
  loadStage(currentStage);
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
    player.style.left = parseInt(player.style.left) - 10 + 'px';
  } else if (event.code === 'ArrowRight') {
    player.style.left = parseInt(player.style.left) + 10 + 'px';
  }
});
