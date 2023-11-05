function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return false;
    }
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (!isValidEmail) {
    alert('Please enter a valid email address.');
    return false;
    }
    return true;
    }
    function response(type, message) {
    if (type === 'success') {
        alert(message);
} else if (type === 'error') {
alert(message);
} else {
alert('Unknown response type.');
}
}
    
