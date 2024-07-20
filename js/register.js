document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const user = {
        username: document.getElementById('username').value,
        phonenumber: document.getElementById('phonenumber').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    };
    localStorage.setItem('user', JSON.stringify(user)); // Store user data in localStorage
    alert('Registration successful!');
    window.location.href = 'account.html'; // Redirect to login page
});
