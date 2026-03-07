import appSettings from "./settings.js";

let menuIsOpen = false;

const lightMode = {
  name: "Light Mode",
  icon: "../assets/icons/moon",
  click: toggleLightMode,
};

const menuItems = [lightMode];

function createMenuButton() {
  const menuButton = document.createElement("div");
  menuButton.classList.add("menuButton");
  menuButton.onclick = () => {
    menuIsOpen ? closeMenu() : openMenu();
  };

  document.body.prepend(menuButton);
}

function createMenuContainer() {}

function openMenu() {
  console.log("Menu Open");
  menuIsOpen = true;
}

function closeMenu() {
  console.log("Menu Closed");
  menuIsOpen = false;
}

function toggleLightMode() {}

function toggleTempUnit() {}

function toggleFirstDay() {}

function toggleHolidays() {}

function selectColorTheme() {}

export default createMenuButton;
