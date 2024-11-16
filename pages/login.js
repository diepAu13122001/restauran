import app from "../app.js";
import Register from "./register.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import { firebaseApp } from "../data/firebase-app.js";
import Home from "./home.js";

export default class Login {
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
    title.innerText = "Login";

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

    // button group
    const buttonGroup = document.createElement("div");
    buttonGroup.style =
      "display: flex; justify-content: space-between; width: 100%; flex-wrap: nowrap;";

    // Tạo button login
    const submitButton = document.createElement("button");
    submitButton.className = "btn btn-primary px-5";
    submitButton.setAttribute("type", "submit");
    submitButton.innerText = "Login";
    // bat su kien cho login button
    submitButton.addEventListener("click", this.checkLogin.bind(this));

    // Tao link dan den register
    const registerDiv = document.createElement("div");
    registerDiv.style.textAlign = "left";
    registerDiv.innerHTML = `<a href='#' id="register-link">Create account</a>`;
    // bat su kien cho link chuyen trang register
    // bind: tim kiem ham trong object hien tai -> this khong bi out
    registerDiv.addEventListener("click", this.getRegister.bind(this));

    // add in button group
    buttonGroup.appendChild(registerDiv);
    buttonGroup.appendChild(submitButton);

    // Thêm tất cả vào form
    form.appendChild(title);
    form.appendChild(emailGroup);
    form.appendChild(passwordGroup);
    form.appendChild(buttonGroup);

    // add vao mainContainer
    containerDiv.appendChild(form);
    mainContainer.appendChild(containerDiv);
  }

  getRegister() {
    const register = new Register();
    app.renderComponent(register);
  }

  checkLogin(event) {
    event.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    // khong nhap du du lieu
    if (!(email && password)) alert("Vui long nhap du thong tin");
    else {
      // co du du lieu -> check auth tren firebase
      const auth = getAuth(firebaseApp);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // luu user hien tai vao local storage
          localStorage.setItem("currentUser", JSON.stringify(user));
          // chuyen trang home
          this.gotoHome();
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
        });
    }
  }

  gotoHome() {
    const home = new Home();
    app.renderComponent(home);
  }
}