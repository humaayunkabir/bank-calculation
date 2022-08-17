document.getElementById('submit-btn').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    if (email === 'test@gmail.com' && password === 'test12') {
        console.log('Valid User')
    }
    else {
        console.log('Invalid User');
    }
})