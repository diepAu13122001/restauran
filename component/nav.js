import app from "../app.js";
import Account from "../pages/account.js";
import Admin from "../pages/admin.js";
import Detail from "../pages/detail.js";
import Home from "../pages/home.js";
import Login from "../pages/login.js";
import Menu from "../pages/menu.js";
import Register from "../pages/register.js";
class Nav {
    constructor(){}
    render(mainContainer){
        // Create the nav element
const nav = document.createElement('nav');

// Create the hamburger menu div
const hamburgerMenu = document.createElement('div');
hamburgerMenu.classList.add('hamburger-menu');

// Add the Font Awesome icon
const icon = document.createElement('i');
icon.classList.add('fas', 'fa-bars');
hamburgerMenu.appendChild(icon);

// Append the hamburger menu to the nav
nav.appendChild(hamburgerMenu);

// Create the nav-menu ul
const navMenu = document.createElement('ul');
navMenu.classList.add('nav-menu');

// Create the first li with avatar
const liAvatar = document.createElement('li');
const avatarLink = document.createElement('a');
avatarLink.addEventListener("click",this.goto_account.bind(this));
const avatarImg = document.createElement('img');
avatarImg.id = 'navAvatar';
avatarImg.src =
  'https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg';
avatarImg.alt = '';
avatarLink.appendChild(avatarImg);
liAvatar.appendChild(avatarLink);
navMenu.appendChild(liAvatar);


// Create and append the first menu item
const li1 = document.createElement('li');
const link1 = document.createElement('a');
avatarLink.addEventListener("click",this.goto_home.bind(this));
link1.textContent = 'Home';
li1.appendChild(link1);
navMenu.appendChild(li1);

// Create and append the second menu item
const li2 = document.createElement('li');
const link2 = document.createElement('a');
avatarLink.addEventListener("click",this.goto_about.bind(this));
link2.textContent = 'About';
li2.appendChild(link2);
navMenu.appendChild(li2);

// Create and append the third menu item
const li3 = document.createElement('li');
const link3 = document.createElement('a');
avatarLink.addEventListener("click",this.goto_menu.bind(this));
link3.textContent = 'Menu';
li3.appendChild(link3);
navMenu.appendChild(li3);

// Create and append the fourth menu item
const li4 = document.createElement('li');
const link4 = document.createElement('a');
avatarLink.addEventListener("click",this.goto_book.bind(this));
link4.textContent = 'Book a table online';
li4.appendChild(link4);
navMenu.appendChild(li4);


// Append the nav-menu to the nav
nav.appendChild(navMenu);

// Append the nav to the body or a specific container
mainContainer.appendChild(nav);

    }
    goto_login() {
      const login = new Login();
      app.renderComponent(login);
    }
    goto_register() {
      const register = new Register();
      app.renderComponent(register);
    }
    goto_home() {
      const home = new Home();
      app.renderComponent(home);
    }
    goto_admin() {
      const admin = new Admin();
      app.renderComponent(admin);
    }
    goto_detail() {
      const detail = new Detail();
      app.renderComponent(detail);
    }
    goto_menu() {
      const menu = new Menu();
      app.renderComponent(menu);
    }
    goto_account() {
      const account = new Account();
      app.renderComponent(account);
    }
    goto_about() {
      const about = new Home();
      app.renderComponent(about);
      about.scrollto_about()
    }
    goto_book() {
      const book = new Home();
      app.renderComponent(book);
      book.scrollto_book()
    }
  
}
export default Nav 