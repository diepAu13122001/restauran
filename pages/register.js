import {firebaseApp} from "../data/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import Login from "./login.js";
import app from "../app.js";

export default class Register {
  constructor() {
    document.getElementsByTagName("head")[0].innerHTML = `<title>register</title>`
    this.nav = new Nav();
    this.footer = new Footer();
  }

 render(mainContainer){
          
  // Create the main element
const main = document.createElement('main');

// Create the register section
const registerSection = document.createElement('section');
registerSection.id = 'register';

// Create the container div
const container = document.createElement('div');
container.className = 'container';

// Add the title
const title = document.createElement('h1');
title.textContent = 'Register';
container.appendChild(title);

// Create the form
const form = document.createElement('form');
form.id = 'registerForm';

// Helper function to create input fields
function createInput(type, id, name, placeholder, isRequired) {
  const input = document.createElement('input');
  input.type = type;
  input.id = id;
  input.name = name;
  input.placeholder = placeholder;
  if (isRequired) input.required = true;
  return input;
}

// Add inputs to the form
form.appendChild(createInput('text', 'username', 'username', 'Username', true));
form.appendChild(
  createInput('text', 'phonenumber', 'phonenumber', 'Phone number', true)
);
form.appendChild(createInput('email', 'email', 'email', 'Email', true));
form.appendChild(
  createInput('password', 'password', 'password', 'Password', true)
);

// Add the submit button
const button = document.createElement('button');
button.type = 'submit';
button.textContent = 'Register';
form.appendChild(button);

// Append the form to the container
container.appendChild(form);

// Add the login link
const loginLink = document.createElement('p');
loginLink.innerHTML = `Already have an account? <a href="login.html">Login here</a>`;
container.appendChild(loginLink);

// Append the container to the section
registerSection.appendChild(container);

// Append the section to the main
main.appendChild(registerSection);

// Append main to the body or another container
mainContainer.appendChild(main);

    this.footer.render(mainContainer);
  }

  goto_Login() {
    const login = new Login();
    app.renderComponent(login);
  }

}
