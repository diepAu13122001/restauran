document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.username === username && user.password === password) {
        window.location.href = 'account.html'; // Redirect to account page
    } else {
        alert('Invalid credentials!');
    }
});
