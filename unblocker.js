// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  const linkForm = document.getElementById('linkForm');
  const linkInput = document.getElementById('linkInput');
  const generateButton = document.getElementById('generateButton');
  const generatedLinks = document.getElementById('generatedLinks');
  const linkList = document.getElementById('linkList');

  let links = []; // Array to store the added links
  let linksGenerated = 0; // Counter for generated links
  const maxLinksGenerated = 3; // Maximum number of links to generate
  const waitTime = 30 * 60 * 1000; // Wait time in milliseconds (30 minutes)

  // Handle form submission to add a link
  linkForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const originalLink = linkInput.value.trim();
    if (originalLink !== '') {
      links.push(originalLink);
      linkInput.value = '';
      alert('Link added successfully!');
    }
  });

  // Handle button click to generate links
  generateButton.addEventListener('click', function() {
    if (links.length === 0) {
      alert('Please add at least one link.');
      return;
    }

    if (linksGenerated < maxLinksGenerated) {
      const generatedLink = generateLink();
      const listItem = document.createElement('li');
      listItem.textContent = generatedLink;
      linkList.appendChild(listItem);
      linksGenerated++;

      if (linksGenerated === maxLinksGenerated) {
        generateButton.disabled = true;
        setTimeout(function() {
          generateButton.disabled = false;
          linksGenerated = 0;
          linkList.innerHTML = '';
        }, waitTime);
      }
    } else {
      alert('You have reached the maximum number of generated links. Please wait for the cooldown period to generate more links.');
    }
  });

  // Function to generate a link
  function generateLink() {
    // Replace this logic with your own link generation algorithm
    // For demonstration purposes, we will generate a link randomly from the added links
    const randomIndex = Math.floor(Math.random() * links.length);
    return links[randomIndex];
  }
});
