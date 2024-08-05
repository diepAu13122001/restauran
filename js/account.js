document.addEventListener('DOMContentLoaded', function () {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('username').value = user.username;
        document.getElementById('phonenumber').value = user.phonenumber;
        document.getElementById('email').value = user.email;
        document.getElementById('avatar').src = user.avatar || 'https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg';
        document.getElementById('navAvatar').src = user.avatar || 'https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg';
    } else {
        window.location.href = 'login.html';
    }

    document.getElementById('logoutBtn').addEventListener('click', function () {
        localStorage.removeItem('user');
        window.location.href = 'login.html';
    });

    document.getElementById('changeAvatar').addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const newAvatar = e.target.result;
                document.getElementById('avatar').src = newAvatar;
                document.getElementById('navAvatar').src = newAvatar;
                user.avatar = newAvatar;
                localStorage.setItem('user', JSON.stringify(user));
            };
            reader.readAsDataURL(file);
        }
    });
});



document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
  });
  