document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    document.querySelector(".nav-menu").classList.toggle("active");
  });

  //thay đổi ảnh ở thanh điều hướng
  document.addEventListener('DOMContentLoaded', function() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.avatar) {
        document.getElementById('navAvatar').src = user.avatar;
    }
});

