import { firebaseApp } from "../data/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import Login from "./login.js";
import app from "../app.js";
import Nav from "../component/nav.js";
import Footer from "../component/footer.js";



export default class Register {
  constructor() {
    document.getElementsByTagName(
      "head"
    )[0].innerHTML = `<title>register</title>`;
    this.nav = new Nav();
    this.footer = new Footer();
  }

  render(mainContainer) {
    // Create the main element
    const main = document.createElement("main");

    // Create the register section
    const registerSection = document.createElement("section");
    registerSection.id = "register";

    // Create the container div
    const container = document.createElement("div");
    container.className = "container";

    // Add the title
    const title = document.createElement("h1");
    title.textContent = "Register";
    container.appendChild(title);

    // Create the form
    const form = document.createElement("form");
    form.id = "registerForm";

    // Helper function to create input fields
    function createInput(type, id, name, placeholder, isRequired) {
      const input = document.createElement("input");
      input.type = type;
      input.id = id;
      input.name = name;
      input.placeholder = placeholder;
      if (isRequired) input.required = true;
      return input;
    }

    // Add inputs to the form
    form.appendChild(
      createInput("text", "username", "username", "Username", true)
    );
    form.appendChild(createInput("email", "email", "email", "Email", true));
    form.appendChild(
      createInput("password", "password", "password", "Password", true)
    );

    // Add the submit button
    const button = document.createElement("button");
    button.addEventListener("click",this.checkRegister.bind(this))
    button.type = "submit";
    button.textContent = "Register";
    form.appendChild(button);

    // Append the form to the container
    container.appendChild(form);

    // Add the login link
    const loginLink = document.createElement("p");
    loginLink.innerHTML = `Already have an account? <a>Login here</a>`;
    loginLink.addEventListener("click",this.goto_Login.bind(this));
    container.appendChild(loginLink);

    // Append the container to the section
    registerSection.appendChild(container);

    // Append the section to the main
    main.appendChild(registerSection);

    // Append main to the body or another container
    mainContainer.appendChild(main);

    this.footer.render(mainContainer);
  }
  validateForm(email, username, password) {
    if (!(email && password && username)) {
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
    return true;
  }
  checkRegister() {
    // get data from input form
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const username = document.getElementById("username").value.trim();

    // kiem tra thong tin nhap vao
    if (this.validateForm(email, username, password)) {
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

  goto_Login() {
    const login = new Login();
    app.renderComponent(login);
  }
}
