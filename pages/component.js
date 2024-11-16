import app from "../app.js";
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
avatarLink.href = './account.html';
const avatarImg = document.createElement('img');
avatarImg.id = 'navAvatar';
avatarImg.src =
  'https://cellphones.com.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg';
avatarImg.alt = '';
avatarLink.appendChild(avatarImg);
liAvatar.appendChild(avatarLink);
navMenu.appendChild(liAvatar);

// Array of menu items
const menuItems = [
  { href: '../index.html#home', text: 'Home' },
  { href: '../index.html#about', text: 'About' },
  { href: './menu.html', text: 'Menu' },
  { href: '../index.html#book', text: 'Book a table online' },
];

// Create the rest of the menu items
menuItems.forEach((item) => {
  const li = document.createElement('li');
  const link = document.createElement('a');
  link.href = item.href;
  link.textContent = item.text;
  li.appendChild(link);
  navMenu.appendChild(li);
});

// Append the nav-menu to the nav
nav.appendChild(navMenu);

// Append the nav to the body or a specific container
document.body.appendChild(nav);

    }
}
export default Nav 