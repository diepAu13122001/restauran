import Home from "./home";
import app from "../app.js";
import Detail from "./detail.js";
class Menu {
    constructor(){
      document.getElementsByTagName("head")[0].innerHTML = `<title>menu</title>`
      this.nav = new Nav();
      this.footer = new Footer();
    }
    render(mainContainer){
      

// Create the filter container div
const filterContainer = document.createElement('div');
filterContainer.className = 'filter-container';

// Create the filter div
const filterDiv = document.createElement('div');
filterDiv.className = 'filter collapsed';
filterDiv.id = 'filter';

// Create the toggle button
const toggleButton = document.createElement('button');
toggleButton.className = 'toggle-btn';
toggleButton.onclick = function () {
  toggleFilter();
};

const toggleImg = document.createElement('img');
toggleImg.src =
  'https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png';
toggleImg.alt = '';
toggleButton.appendChild(toggleImg);
filterDiv.appendChild(toggleButton);

// Array of filter buttons
const filterOptions = [
  { label: 'Breakfast', action: 'breakfast' },
  { label: 'Lunch', action: 'lunch' },
  { label: 'Dinner', action: 'dinner' },
  { label: 'Drinks', action: 'drinks' },
  { label: 'Vegan', action: 'vegan' },
  { label: 'All', action: 'all' },
];

// Create filter buttons dynamically
filterOptions.forEach((option) => {
  const button = document.createElement('button');
  button.className = 'btn';
  button.textContent = option.label;
  button.onclick = function () {
    filterFood(option.action);
  };
  filterDiv.appendChild(button);
});

// Append the filter div to the filter container
filterContainer.appendChild(filterDiv);

// Create the main content section
const mainContent = document.createElement('main');
mainContent.className = 'main-content';
mainContent.id = 'main-content';

// Create the dish list div
const dishList = document.createElement('div');
dishList.id = 'dish-list';

// Append the dish list to the main content
mainContent.appendChild(dishList);

// Append the filter container and main content to the body or another container
mainContainer.appendChild(filterContainer);
mainContainer.appendChild(mainContent);
this.footer.render(mainContainer);
    }

goto_detail(){
	const detail = new Detail()
	app.changeComponent(detail)
}
goto_home(){
	const home = new Home()
	app.changeComponent(home)
}
}
export default Menu;