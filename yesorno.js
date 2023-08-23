    document.getElementById('saveForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const saveChoice = document.querySelector('input[name="save"]:checked').value;

            if (saveChoice === 'yes') {
                // Display the desired website in the iframe
                const websiteFrame = document.getElementById('websiteFrame');
                websiteFrame.style.display = 'block';
                websiteFrame.src = 'https://example.com'; // Change this URL
            } else {
                // Redirect to about:blank or another URL
                window.location.href = 'about:blank'; // Change this URL
            }
        });
