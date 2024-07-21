document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Lấy thông tin từ form
    const user = {
        username: document.getElementById('username').value,
        phonenumber: document.getElementById('phonenumber').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        avatar: 'https://ibiettuot.com/wp-content/uploads/2021/10/avatar-mac-dinh.png' // Default avatar
    };

    // Lưu thông tin người dùng vào localStorage
    localStorage.setItem('user', JSON.stringify(user));
    alert('Registration successful!');
    window.location.href = 'login.html'; // Redirect to login page
});
