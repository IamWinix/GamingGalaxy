var player = document.getElementById("player");
var playerX = 0;
var playerY = 0;

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowUp") {
    playerY -= 10;
  }
  if (event.code === "ArrowDown") {
    playerY += 10;
  }
  if (event.code === "ArrowLeft") {
    playerX -= 10;
  }
  if (event.code === "ArrowRight") {
    playerX += 10;
  }
  
  player.style.transform = `translate(${playerX}px, ${playerY}px)`;
});
