function navigateTo(url) {
  window.location.href = url;
}

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

  // Disable scrolling
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const lightbox = document.querySelector("#lightbox");
  document.body.removeChild(lightbox);

  // Enable scrolling
  document.body.style.overflow = "auto";
}
