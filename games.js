// Get all game elements
const games = document.querySelectorAll('.game');

// Attach click event listener to each game
games.forEach(game => {
  game.addEventListener('click', () => {
    // Get the URL from the game link
    const url = game.querySelector('a').href;
    
    // Redirect to the URL
    window.location.href = url;
  });
});
