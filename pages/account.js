import Login from "./login.js";
import Register from "./register.js";
import app from "../app.js";
import { firebaseApp } from "../data/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

class Account {
  constructor() {
    document.getElementsByTagName("head")[0].innerHTML = `<title>account</title>`
    this.nav = new Nav();
    this.footer = new Footer();
  }
  render(mainContainer) {
   
    // Khi trang đã được tải xong, ta sẽ tạo các phần tử HTML qua JavaScript và thêm vào DOM.
document.addEventListener("DOMContentLoaded", function() {
  
  // Tạo phần tử main và section
  const main = document.createElement('main');
  const section = document.createElement('section');
  section.id = 'account';

  // Tạo phần tử container
  const container = document.createElement('div');
  container.classList.add('container');
  
  // Tạo tiêu đề Account Information
  const h1 = document.createElement('h1');
  h1.textContent = 'Account Information';
  container.appendChild(h1);

  // Tạo phần avatar container và ảnh
  const avatarContainer = document.createElement('div');
  avatarContainer.classList.add('avatar-container');
  const avatarImg = document.createElement('img');
  avatarImg.id = 'avatar';
  avatarImg.alt = 'Avatar';
  avatarContainer.appendChild(avatarImg);
  container.appendChild(avatarContainer);

  // Tạo phần hiển thị điểm người dùng
  const userPointDiv = document.createElement('div');
  userPointDiv.id = 'user-point';
  const userPointH1 = document.createElement('h1');
  userPointH1.innerHTML = 'Your point: <span>100</span>';
  userPointDiv.appendChild(userPointH1);
  container.appendChild(userPointDiv);

  // Tạo form để thay đổi thông tin tài khoản
  const accountForm = document.createElement('form');
  accountForm.id = 'accountForm';
  accountForm.enctype = 'multipart/form-data';

  // Tạo input file upload
  const fileLabel = document.createElement('label');
  fileLabel.textContent = 'Select image to upload:';
  accountForm.appendChild(fileLabel);

  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.name = 'fileToUpload';
  fileInput.id = 'fileToUpload';
  accountForm.appendChild(fileInput);

  // Tạo các input cho username, phonenumber, email
  const usernameInput = document.createElement('input');
  usernameInput.type = 'text';
  usernameInput.id = 'username';
  usernameInput.name = 'username';
  usernameInput.placeholder = 'Username';
  usernameInput.disabled = true;
  accountForm.appendChild(usernameInput);

  const phoneNumberInput = document.createElement('input');
  phoneNumberInput.type = 'text';
  phoneNumberInput.id = 'phonenumber';
  phoneNumberInput.name = 'phonenumber';
  phoneNumberInput.placeholder = 'Phone number';
  phoneNumberInput.disabled = true;
  accountForm.appendChild(phoneNumberInput);

  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.id = 'email';
  emailInput.name = 'email';
  emailInput.placeholder = 'Email';
  emailInput.disabled = true;
  accountForm.appendChild(emailInput);

  // Tạo nút Save
  const saveButton = document.createElement('button');
  saveButton.type = 'submit';
  saveButton.id = 'save_profile_button';
  saveButton.textContent = 'Save';
  accountForm.appendChild(saveButton);

  // Tạo nút Logout
  const logoutButton = document.createElement('button');
  logoutButton.type = 'button'; // Chắc chắn là type="button" nếu không muốn form tự động submit
  logoutButton.id = 'logoutBtn';
  logoutButton.textContent = 'Logout';
  accountForm.appendChild(logoutButton);

  // Thêm form vào container
  container.appendChild(accountForm);

  // Thêm container vào section
  section.appendChild(container);

  // Thêm section vào main
  main.appendChild(section);

  // Thêm phần tử main vào body của trang
  mainContainer.appendChild(main);

  // Xử lý sự kiện cho các nút
  const avatar = document.getElementById('avatar');
  const fileToUpload = document.getElementById('fileToUpload');
  const saveProfileButton = document.getElementById('save_profile_button');
  const logoutButtonElement = document.getElementById('logoutBtn');

  // Xử lý file upload và hiển thị ảnh lên avatar
  fileToUpload.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        avatar.src = e.target.result; // Hiển thị ảnh lên phần tử img
      };
      reader.readAsDataURL(file);
    }
  });

  // Xử lý sự kiện save profile
  saveProfileButton.addEventListener('click', function(event) {
    event.preventDefault();
    alert("Profile saved!");
  });

  // Xử lý sự kiện logout
  logoutButtonElement.addEventListener('click', function(event) {
    event.preventDefault();
    alert("You have logged out.");
  });

});
    // Append the main element to the body or another container
    mainContainer.appendChild(main);
    this.footer.render(mainContainer);

  }
  uploadimg(){}
  updateProfile(){}
  loadInfo(){}
  logout(){
    const auth = getAuth(firebaseApp);
    const _this = this
    signOut(auth).then(() => {
      // Sign-out successful.
      _this.goto_home()
    }).catch((error) => {
      // An error happened.
      alert(error)
    });
  }

  goto_home() {
    const home = new Home();
    app.changeComponent(home);
  }
  goto_login() {
    const login = new Login();
    app.changeComponent(login);
  }
  goto_register() {
    const register = new Register();
    app.changeComponent(register);
  }
}
export default Account;
