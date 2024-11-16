import {firebaseApp} from "../data/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import Login from "./login.js";
import app from "../app.js";

export default class Register {
  constructor() {}

  render(mainContainer) {
    // tao container de form duoc nam giua
    const containerDiv = document.createElement("div");
    containerDiv.classList.add("mt-5");
    containerDiv.style.width = "100%";
    containerDiv.style.display = "flex";
    containerDiv.style.justifyContent = "center";

    // Tạo thẻ form
    const form = document.createElement("form");
    form.className = "col-md-6 p-4 border rounded";

    // Tạo thẻ h2 tiêu đề
    const title = document.createElement("h2");
    title.className = "text-center mb-4";
    title.innerText = "Register";

    // Tạo group cho email
    const usernameGroup = document.createElement("div");
    usernameGroup.className = "mb-3";
    const usernameLabel = document.createElement("label");
    usernameLabel.className = "form-label";
    usernameLabel.setAttribute("for", "username");
    usernameLabel.innerText = "Username";
    const usernameInput = document.createElement("input");
    usernameInput.className = "form-control";
    usernameInput.setAttribute("type", "text");
    usernameInput.setAttribute("id", "username");
    usernameInput.setAttribute("placeholder", "Enter your username");

    usernameGroup.appendChild(usernameLabel);
    usernameGroup.appendChild(usernameInput);

    // Tạo group cho email
    const emailGroup = document.createElement("div");
    emailGroup.className = "mb-3";
    const emailLabel = document.createElement("label");
    emailLabel.className = "form-label";
    emailLabel.setAttribute("for", "email");
    emailLabel.innerText = "Email address";
    const emailInput = document.createElement("input");
    emailInput.className = "form-control";
    emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "email");
    emailInput.setAttribute("placeholder", "Enter your email");

    emailGroup.appendChild(emailLabel);
    emailGroup.appendChild(emailInput);

    // Tạo group cho password
    const passwordGroup = document.createElement("div");
    passwordGroup.className = "mb-3";
    const passwordLabel = document.createElement("label");
    passwordLabel.className = "form-label";
    passwordLabel.setAttribute("for", "password");
    passwordLabel.innerText = "Password";
    const passwordInput = document.createElement("input");
    passwordInput.className = "form-control";
    passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("id", "password");
    passwordInput.setAttribute("placeholder", "Enter your password");

    passwordGroup.appendChild(passwordLabel);
    passwordGroup.appendChild(passwordInput);

    // Tạo group cho confirm password
    const confirmPasswordGroup = document.createElement("div");
    confirmPasswordGroup.className = "mb-3";
    const confirmPasswordLabel = document.createElement("label");
    confirmPasswordLabel.className = "form-label";
    confirmPasswordLabel.setAttribute("for", "confirm-password");
    confirmPasswordLabel.innerText = "Confirm password";
    const confirmPasswordInput = document.createElement("input");
    confirmPasswordInput.className = "form-control";
    confirmPasswordInput.setAttribute("type", "password");
    confirmPasswordInput.setAttribute("id", "confirm-password");
    confirmPasswordInput.setAttribute("placeholder", "Confirm your password");

    confirmPasswordGroup.appendChild(confirmPasswordLabel);
    confirmPasswordGroup.appendChild(confirmPasswordInput);

    // button group
    const buttonGroup = document.createElement("div");
    buttonGroup.style =
      "display: flex; justify-content: space-between; width: 100%; flex-wrap: nowrap;";

    // Tạo button register
    const submitButton = document.createElement("button");
    submitButton.className = "btn btn-primary px-5";
    submitButton.setAttribute("type", "submit");
    submitButton.innerText = "Register";
    submitButton.addEventListener("click", this.checkRegister.bind(this));

    // Tao link dan den register
    const registerDiv = document.createElement("div");
    registerDiv.style.textAlign = "left";
    registerDiv.innerHTML = `<a href='#'>Login here</a>`;
    registerDiv.addEventListener("click", this.gotoLogin.bind(this));

    // add in button group
    buttonGroup.appendChild(registerDiv);
    buttonGroup.appendChild(submitButton);

    // Thêm tất cả vào form
    form.appendChild(title);
    form.appendChild(usernameGroup);
    form.appendChild(emailGroup);
    form.appendChild(passwordGroup);
    form.appendChild(confirmPasswordGroup);
    form.appendChild(buttonGroup);

    // add vao mainContainer
    containerDiv.appendChild(form);
    mainContainer.appendChild(containerDiv);
  }

  validateForm(email, username, password, confirmPassword) {
    if (!(email && password && username && confirmPassword)) {
      // khong nhap du du lieu
      alert("Vui long nhap du thong tin");
      return false;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert("Email khong dung dinh dang!");
      return false;
    }
    if (password.length < 6) {
      alert("Mat khau phai tu 6 chu so tro len!");
      return false;
    }
    if (password != confirmPassword) {
      alert("Mat khau khong trung khop!");
      return false;
    }
    return true;
  }

  checkRegister() {
    // get data from input form
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const username = document.getElementById("username").value.trim();
    const confirmPassword = document
      .getElementById("confirm-password")
      .value.trim();

    // kiem tra thong tin nhap vao
    if (this.validateForm(email, username, password, confirmPassword)) {
      const auth = getAuth(firebaseApp);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // luu them username
          updateProfile(user, {
            displayName: username,
            photoURL:
              "https://i.pinimg.com/236x/a3/9b/7b/a39b7b7bd7012a4f6fd2030c50e91d0e.jpg",
          })
            .then(() => {
              console.log("User profile updated");
            })
            .catch((error) => {
              alert("Update profile error:", error);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
        });
    }
  }

  gotoLogin() {
    const login = new Login();
    app.renderComponent(login);
  }
}