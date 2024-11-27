import Login from "./login.js";
import Register from "./register.js";
import app from "../app.js";

class Account {
  constructor() {
    document.getElementsByTagName("head")[0].innerHTML = `<title>account</title>`
    this.nav = new Nav();
    this.footer = new Footer();
  }
  render(mainContainer) {
   
    // Create the main element
    const main = document.createElement("main");

    // Create the account section
    const accountSection = document.createElement("section");
    accountSection.id = "account";

    // Create the container div
    const container = document.createElement("div");
    container.className = "container";

    // Add the section title
    const title = document.createElement("h1");
    title.textContent = "Account Information";
    container.appendChild(title);

    // Create the avatar container
    const avatarContainer = document.createElement("div");
    avatarContainer.className = "avatar-container";

    // Add the avatar image

    avatarImg.id = "avatar";
    avatarImg.alt = "Avatar";
    avatarContainer.appendChild(avatarImg);

    // Add the file input for changing avatar
    const avatarInput = document.createElement("input");
    avatarInput.type = "file";
    avatarInput.id = "changeAvatar";
    avatarInput.accept = "image/*";
    avatarContainer.appendChild(avatarInput);

    // Append the avatar container to the main container
    container.appendChild(avatarContainer);

    // Add user point display
    const userPoint = document.createElement("div");
    userPoint.id = "user-point";

    const pointTitle = document.createElement("h1");
    pointTitle.innerHTML = "Your point: <span>100</span>";
    userPoint.appendChild(pointTitle);

    // Append user point to the container
    container.appendChild(userPoint);

    // Create the account form
    const accountForm = document.createElement("form");
    accountForm.id = "accountForm";

    // Add the form fields
    const formFieldss = [
      {
        id: "username",
        name: "username",
        placeholder: "Username",
        disabled: true,
      },
      {
        id: "phonenumber",
        name: "phonenumber",
        placeholder: "Phone number",
        disabled: true,
      },
      { id: "email", name: "email", placeholder: "Email", disabled: true },
    ];

    formFieldsss.forEach((field) => {
      const input = document.createElement("input");
      input.type = "text";
      input.id = field.id;
      input.name = field.name;
      input.placeholder = field.placeholder;
      input.disabled = field.disabled;
      accountForm.appendChild(input);
    });

    // Add the logout button
    const logoutButton = document.createElement("button");
    logoutButton.id = "logoutBtn";
    logoutButton.textContent = "Logout";
    accountForm.appendChild(logoutButton);

    // Append the account form to the container
    container.appendChild(accountForm);

    // Append the container to the account section
    accountSection.appendChild(container);

    // Append the account section to the main element
    main.appendChild(accountSection);

    // Append the main element to the body or another container
    mainContainer.appendChild(main);
    this.footer.render(mainContainer);

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
