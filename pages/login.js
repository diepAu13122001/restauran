import app from "../app.js";
import Register from "./register.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import { firebaseApp } from "../data/firebase-app.js";
import Home from "./home.js";
import Account from "./account.js";
import Nav from "../component/nav.js";
import Footer from "../component/footer.js";

export default class Login {
  constructor() {
    document.getElementsByTagName("head")[0].innerHTML = `<title>login</title>`;
    this.nav = new Nav();
    this.footer = new Footer();
  }

  render(mainContainer) {
    // Create the section element
    const loginSection = document.createElement("section");
    loginSection.id = "login";

    // Create the container div
    const container = document.createElement("div");
    container.className = "container";

    // Add the section title
    const title = document.createElement("h1");
    title.textContent = "Login";
    container.appendChild(title);

    // Create the login form
    const loginForm = document.createElement("form");
    loginForm.id = "loginForm";

    // Add the form fields
    const formFieldss = [
      {
        id: "username",
        name: "username",
        placeholder: "Username",
        type: "text",
        required: true,
      },
      {
        id: "password",
        name: "password",
        placeholder: "Password",
        type: "password",
        required: true,
      },
    ];

    formFieldss.forEach((field) => {
      const input = document.createElement("input");
      input.type = field.type;
      input.id = field.id;
      input.name = field.name;
      input.placeholder = field.placeholder;
      input.required = field.required;
      loginForm.appendChild(input);
    });

    // Add the login button
    const loginButton = document.createElement("button");
    loginButton.type = "submit";
    loginButton.textContent = "Login";
    loginForm.appendChild(loginButton);

    // Append the form to the container
    container.appendChild(loginForm);

    // Add the registration link
    const registrationLink = document.createElement("p");
    registrationLink.innerHTML = `Don't have an account? <a >Register here</a>`;
    registrationLink.addEventListener("click", this.goto_register.bind(this));
    container.appendChild(registrationLink);

    // Append the container to the section
    loginSection.appendChild(container);

    // Append the login section to the body or another container
    mainContainer.appendChild(loginSection);

    this.footer.render(mainContainer);
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

  goto_Home() {
    const home = new Home();
    app.changeComponent(home);
  }
  goto_register() {
    const register = new Register();
    app.changeComponent(register);
  }
  goto_account() {
    const account = new Account();
    app.changeComponent(account);
  }
  goto_admin() {
    const admin = new Admin();
    app.changeComponent(admin);
  }
}
