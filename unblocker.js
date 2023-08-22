// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  const linkForm = document.getElementById('linkForm');
  const linkInput = document.getElementById('linkInput');
  const generatedLink = document.getElementById('generatedLink');
  const outputLink = document.getElementById('outputLink');
  const copyButton = document.getElementById('copyButton');

  // Handle form submission
  linkForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const originalLink = linkInput.value.trim();
    const generatedLinkValue = generateLink(originalLink);
    outputLink.value = generatedLinkValue;
    generatedLink.classList.remove('hidden');
  });

  // Copy generated link to clipboard
  copyButton.addEventListener('click', function() {
    outputLink.select();
    document.execCommand('copy');
    alert('Copied to clipboard!');
  });

  // Function to generate a link (replace with your own logic)
  function generateLink(originalLink) {
    // Replace this logic with your own link generation algorithm
    // For demonstration purposes, we will prepend 'https://example.com/' to the original link
    return 'https://example.com/' + originalLink;
  }
});
