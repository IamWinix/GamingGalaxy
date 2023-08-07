javascript
const player = document.getElementById('player');
const interactButton = document.getElementById('interact-button');
const backgroundMusic = document.getElementById('background-music');

interactButton.addEventListener('click', () => {
  alert('You interacted with the game!');
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowLeft') {
    player.style.left = parseInt(player.style.left) - 10 + 'px';
  } else if (event.code === 'ArrowRight') {
    player.style.left = parseInt(player.style.left) + 10 + 'px';
  }
});

backgroundMusic.play();
