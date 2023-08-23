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

document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".images img");
  
  images.forEach(function(image) {
    image.addEventListener("click", function() {
      openLightbox(image.src, image.alt);
    });
  });
});

function openLightbox(src, alt) {
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <img src="${src}" alt="${alt}">
    </div>
    <span class="close-button">&times;</span>
  `;
  document.body.appendChild(lightbox);
  
  const closeButton = document.querySelector(".close-button");
  closeButton.addEventListener("click", closeLightbox);
}

function closeLightbox() {
  const lightbox = document.querySelector("#lightbox");
  document.body.removeChild(lightbox);
}
