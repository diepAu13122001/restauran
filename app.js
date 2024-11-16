import Home from "./pages/home.js";
import Login from "./pages/login.js";
import Register from "./pages/register.js";

class App {
  constructor() {
    this.mainContainer = document.getElementById("app");
  }

  renderComponent(component) {
    // xoa du lieu cu -> add component moi
    this.mainContainer.innerHTML = "";
    component.render(this.mainContainer);
  }
}

// 1 project = 1 app
const app = new App();
// render giao dien
if (localStorage.getItem("currentUser")) {
  const home = new Home();
  app.renderComponent(home);
} else {
  const login = new Login();
  app.renderComponent(login);
}

export default app;