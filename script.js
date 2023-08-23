function navigateTo(url) {
  window.location.href = url;
}

window.addEventListener("scroll", function() {
  var scrollDown = document.querySelector(".scroll-down");
  if (window.scrollY > 0) {
    scrollDown.style.display = "none";
  } else {
    scrollDown.style.display = "block";
  }
});
