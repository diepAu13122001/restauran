class Account {
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

// Create the account section
const accountSection = document.createElement('section');
accountSection.id = 'account';

// Create the container div
const container = document.createElement('div');
container.className = 'container';

// Add the section title
const title = document.createElement('h1');
title.textContent = 'Account Information';
container.appendChild(title);

// Create the avatar container
const avatarContainer = document.createElement('div');
avatarContainer.className = 'avatar-container';

// Add the avatar image

avatarImg.id = 'avatar';
avatarImg.alt = 'Avatar';
avatarContainer.appendChild(avatarImg);

// Add the file input for changing avatar
const avatarInput = document.createElement('input');
avatarInput.type = 'file';
avatarInput.id = 'changeAvatar';
avatarInput.accept = 'image/*';
avatarContainer.appendChild(avatarInput);

// Append the avatar container to the main container
container.appendChild(avatarContainer);

// Add user point display
const userPoint = document.createElement('div');
userPoint.id = 'user-point';

const pointTitle = document.createElement('h1');
pointTitle.innerHTML = 'Your point: <span>100</span>';
userPoint.appendChild(pointTitle);

// Append user point to the container
container.appendChild(userPoint);

// Create the account form
const accountForm = document.createElement('form');
accountForm.id = 'accountForm';

// Add the form fields
const formFields = [
  { id: 'username', name: 'username', placeholder: 'Username', disabled: true },
  {
    id: 'phonenumber',
    name: 'phonenumber',
    placeholder: 'Phone number',
    disabled: true,
  },
  { id: 'email', name: 'email', placeholder: 'Email', disabled: true },
];

formFields.forEach((field) => {
  const input = document.createElement('input');
  input.type = 'text';
  input.id = field.id;
  input.name = field.name;
  input.placeholder = field.placeholder;
  input.disabled = field.disabled;
  accountForm.appendChild(input);
});

// Add the logout button
const logoutButton = document.createElement('button');
logoutButton.id = 'logoutBtn';
logoutButton.textContent = 'Logout';
accountForm.appendChild(logoutButton);

// Append the account form to the container
container.appendChild(accountForm);

// Append the container to the account section
accountSection.appendChild(container);

// Append the account section to the main element
main.appendChild(accountSection);

// Append the main element to the body or another container
document.body.appendChild(main);

// Create the footer element
const footer = document.createElement('footer');
footer.className = 'footer';

// Create the footer content div
const footerContent = document.createElement('div');
footerContent.className = 'footer-content';

// Create the footer logo div
const footerLogo = document.createElement('div');
footerLogo.className = 'footer-logo';

// Add the logo image
const logoImg = document.createElement('img');
logoImg.src =
  'https://thietkewebchuyen.com/images/mau-thiet-ke-logo-chibi-cute/hinh-nen-tra-sua-cute-mau-hong-vang-do-cam-7.jpg';
logoImg.alt = 'Logo';
footerLogo.appendChild(logoImg);

// Append footer logo to footer content
footerContent.appendChild(footerLogo);

// Create the footer info div
const footerInfo = document.createElement('div');
footerInfo.className = 'footer-info';

// Add footer info content
const footerInfoText = [
  'Hanoi City, Vietnam',
  'info@example.com',
  '+1 234 567 890',
  'Design & Develop by Trong Tue',
];

footerInfoText.forEach((text) => {
  const p = document.createElement('p');
  p.textContent = text;
  footerInfo.appendChild(p);
});

// Append footer info to footer content
footerContent.appendChild(footerInfo);

// Append footer content to footer
footer.appendChild(footerContent);

// Create the footer feedback section
const footerFeedback = document.createElement('div');
footerFeedback.className = 'footer-feedback';

// Add feedback title
const feedbackTitle = document.createElement('h4');
feedbackTitle.textContent = 'Your feedback';
footerFeedback.appendChild(feedbackTitle);

// Create the feedback form
const feedbackForm = document.createElement('form');
feedbackForm.id = 'feedbackForm';
feedbackForm.className = 'needs-validation';
feedbackForm.noValidate = true;

// Feedback form fields
const formFields = [
  {
    label: 'Name:',
    type: 'text',
    id: 'name',
    name: 'name',
    feedback: 'Please enter your name.',
  },
  {
    label: 'Email:',
    type: 'email',
    id: 'email',
    name: 'email',
    feedback: 'Please enter a valid email address.',
  },
];

// Add form fields
formFields.forEach((field) => {
  const div = document.createElement('div');
  div.className = 'mb-3';

  const label = document.createElement('label');
  label.for = field.id;
  label.className = 'form-label';
  label.textContent = field.label;
  div.appendChild(label);

  const input = document.createElement('input');
  input.type = field.type;
  input.id = field.id;
  input.name = field.name;
  input.className = 'form-control';
  input.required = true;
  div.appendChild(input);

  const feedback = document.createElement('div');
  feedback.className = 'invalid-feedback';
  feedback.textContent = field.feedback;
  div.appendChild(feedback);

  feedbackForm.appendChild(div);
});

// Add rating field
const ratingDiv = document.createElement('div');
ratingDiv.className = 'mb-3';

const ratingLabel = document.createElement('label');
ratingLabel.for = 'rating';
ratingLabel.className = 'form-label';
ratingLabel.textContent = 'Evaluate:';
ratingDiv.appendChild(ratingLabel);

const ratingSelect = document.createElement('select');
ratingSelect.id = 'rating';
ratingSelect.name = 'rating';
ratingSelect.className = 'form-select';
ratingSelect.required = true;

const ratingOptions = [
  { value: '', text: 'Select review', disabled: true, selected: true },
  { value: '1', text: '1 ☆' },
  { value: '2', text: '2 ☆' },
  { value: '3', text: '3 ☆' },
  { value: '4', text: '4 ☆' },
  { value: '5', text: '5 ☆' },
];

ratingOptions.forEach((option) => {
  const opt = document.createElement('option');
  opt.value = option.value;
  opt.textContent = option.text;
  if (option.disabled) opt.disabled = true;
  if (option.selected) opt.selected = true;
  ratingSelect.appendChild(opt);
});

ratingDiv.appendChild(ratingSelect);
feedbackForm.appendChild(ratingDiv);

// Add comment field
const commentDiv = document.createElement('div');
commentDiv.className = 'mb-3';

const commentLabel = document.createElement('label');
commentLabel.for = 'comments';
commentLabel.className = 'form-label';
commentLabel.textContent = 'Comment:';
commentDiv.appendChild(commentLabel);

const commentTextarea = document.createElement('textarea');
commentTextarea.id = 'comments';
commentTextarea.name = 'comments';
commentTextarea.className = 'form-control';
commentTextarea.rows = 3;
commentTextarea.required = true;
commentDiv.appendChild(commentTextarea);

const commentFeedback = document.createElement('div');
commentFeedback.className = 'invalid-feedback';
commentFeedback.textContent = 'Please enter your comment.';
commentDiv.appendChild(commentFeedback);

feedbackForm.appendChild(commentDiv);

// Add submit button
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.className = 'btn btn-primary';
submitButton.textContent = 'Send feedback';
feedbackForm.appendChild(submitButton);

// Append feedback form to footer feedback
footerFeedback.appendChild(feedbackForm);

// Append footer feedback to footer
footer.appendChild(footerFeedback);

// Append footer to the body or another container
document.body.appendChild(footer);

    }
}