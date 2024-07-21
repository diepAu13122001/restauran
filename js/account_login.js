const user = JSON.parse(localStorage.getItem("user"));
/// check neu da login => qua thang form add menu
if (user) {
  // da login
  document.getElementById("add_menu").classList.remove("hidden");
} else {
  // chua login
  window.location.href = 'login.html';
  document.getElementById("add_menu").classList.add("hidden");
}
//------------------------------------------------------------------------------------------------------------------------------

window.onload = function() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('username').value = user.username;
        document.getElementById('email').value = user.email;
        document.getElementById('avatarImg').src = user.avatar || 'https://ibiettuot.com/wp-content/uploads/2021/10/avatar-mac-dinh.png';
    }
};

document.getElementById('accountForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const user = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: JSON.parse(localStorage.getItem('user')).password, // Preserve existing password
        avatar: document.getElementById('avatar').files.length ? URL.createObjectURL(document.getElementById('avatar').files[0]) : JSON.parse(localStorage.getItem('user')).avatar
    };

    // Store updated user data in localStorage
    localStorage.setItem('user', JSON.stringify(user));
    alert('Account updated successfully!');
    document.getElementById('avatarImg').src = user.avatar;
});

document.getElementById('logout').addEventListener('click', function() {
    localStorage.removeItem('user');
    alert('Logged out successfully!');
    window.location.href = 'login.html'; // Redirect to login page
});
