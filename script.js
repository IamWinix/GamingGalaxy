function playGame() {
    var selectElement = document.getElementById("gameSelect");
    var selectedGame = selectElement.value;

    // Redirect the user to the selected game's page
    if (selectedGame === "game1") {
        window.location.href = "game.html";
    } else if (selectedGame === "game2") {
        window.location.href = "game2.html";
    } else if (selectedGame === "game3") {
        window.location.href = "game3.html";
    }
}

var playButton = document.getElementById("playButton");
playButton.addEventListener("click", playGame);
