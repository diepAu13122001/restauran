class Admin {
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
// Create the main element
const main = document.createElement('main');

// Function to create a form input element
function createInput(type, placeholder, id, name) {
  const input = document.createElement('input');
  input.type = type;
  input.placeholder = placeholder;
  input.id = id;
  input.name = name;
  return input;
}

// Function to create a form textarea element
function createTextarea(placeholder, id, name) {
  const textarea = document.createElement('textarea');
  textarea.placeholder = placeholder;
  textarea.id = id;
  textarea.name = name;
  return textarea;
}

// Function to create a select element with options
function createSelect(id, name, options) {
  const select = document.createElement('select');
  select.id = id;
  select.name = name;

  options.forEach((optionValue) => {
    const option = document.createElement('option');
    option.value = optionValue;
    option.textContent = optionValue;
    select.appendChild(option);
  });

  return select;
}

// Function to create a section
function createSection(id, titleText, formElements, buttons) {
  const section = document.createElement('section');
  section.id = id;

  // Add title
  const title = document.createElement('div');
  title.className = id === 'login' ? 'title' : `title${id === 'delete_menu' ? '1' : ''}`;
  title.textContent = titleText;
  section.appendChild(title);

  // Add form container
  const formContainer = document.createElement('div');
  formContainer.className = id === 'login' ? 'form' : `form${id === 'delete_menu' ? '1' : ''}`;

  // Create form
  const form = document.createElement('form');
  formElements.forEach((element) => form.appendChild(element));
  buttons.forEach((button) => form.appendChild(button));
  formContainer.appendChild(form);

  section.appendChild(formContainer);

  return section;
}

// Create login section
const loginSection = createSection(
  'login',
  'Admin Login',
  [
    createInput('text', 'Username', 'admin_name', 'admin_username'),
    createInput('password', 'Password', 'admin_password', 'admin_userpassword'),
  ],
  [
    (() => {
      const button = document.createElement('button');
      button.type = 'submit';
      button.id = 'login-submit';
      button.textContent = 'Login';
      return button;
    })(),
  ]
);

// Create add menu section
const addMenuSection = createSection(
  'add_menu',
  'Add item in menu',
  [
    createInput('text', 'typ menu item url', 'image', 'image'),
    createInput('text', 'Type menu item name', 'name', 'name'),
    createTextarea('Type menu item detail', 'detail', 'detail'),
    createInput('text', 'Type menu item price', 'price', 'price'),
    createSelect('menu_type', 'menu_type', ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Drink']),
  ],
  [
    (() => {
      const button = document.createElement('button');
      button.type = 'submit';
      button.id = 'add_menu_btn';
      button.textContent = 'Add item';
      return button;
    })(),
    (() => {
      const button = document.createElement('button');
      button.type = 'reset';
      button.style.backgroundColor = 'lightgray';
      button.textContent = 'Reset form';
      return button;
    })(),
  ]
);
addMenuSection.classList.add('hidden');

// Create delete menu section
const deleteMenuSection = createSection(
  'delete_menu',
  'Delete item in menu',
  [
    createInput('text', 'typ menu item url', 'image', 'image'),
    createInput('text', 'Type menu item name', 'name', 'name'),
    createInput('text', 'Type menu item price', 'price', 'price'),
    createSelect('menu_type', 'menu_type', ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Drink']),
  ],
  [
    (() => {
      const button = document.createElement('button');
      button.type = 'submit';
      button.id = 'delete_menu_btn';
      button.textContent = 'Delete item';
      return button;
    })(),
    (() => {
      const button = document.createElement('button');
      button.type = 'reset';
      button.style.backgroundColor = 'lightgray';
      button.textContent = 'Reset form';
      return button;
    })(),
  ]
);
deleteMenuSection.classList.add('hidden1');

// Append all sections to the main
main.appendChild(loginSection);
main.appendChild(addMenuSection);
main.appendChild(deleteMenuSection);

// Append main to the body or another container
document.body.appendChild(main);

    }

}
export default Admin