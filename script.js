document.addEventListener("DOMContentLoaded", function() {
  var urlObj = new URL(window.location.href);
  var directURL = "https://www.gaminggalaxy.games/unblocker.html";
  var url = directURL;

  if (urlObj.searchParams.has("url")) {
    url = urlObj.searchParams.get("url");
  }

  var playButton = document.getElementById("playButton");

  playButton.addEventListener("click", function() {
    window.open(url, "_blank");
    playButton.style.backgroundColor = "#808080";
    playButton.innerHTML = "Playing";
  });
});
