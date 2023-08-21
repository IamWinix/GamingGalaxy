function changeBackgroundColor() {
    document.body.style.backgroundColor = 'lightblue';
}

function showMessage() {
    var message = prompt('Enter a message:');
    if (message) {
        alert('You entered: ' + message);
    }
}

function toggleVisibility() {
    var element = document.getElementById('myElement');
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}
