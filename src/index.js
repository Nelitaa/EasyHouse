import './style.css';
import logo from './images/logo.png';
import arrowDown from './images/arrow-down.png';
import houseIcon from './images/house-icon.svg';
import pencilSquare from './images/pencil-icon.svg';
import shieldCheck from './images/shield-icon.svg';

require('bootstrap-icons/font/bootstrap-icons.css');

// Menu mobile
const menuButton = document.querySelector('header button');
const menuImg = menuButton.querySelector('img');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
  if (menuImg.src.includes('menu.png')) {
    menuImg.src = './images/close.png';
    nav.classList.add('active');
  } else {
    menuImg.src = './images/menu.png';
    nav.classList.remove('active');
  }
  menuButton.blur(); // Remove focus from button
});
// desktop menu
const homeLogo = document.querySelector('.logoImg');
homeLogo.src = logo;
const dropdownMenu = document.querySelector('.menu_dropdown_arrow');
dropdownMenu.src = arrowDown;
const housicon = document.querySelector('.house_icon');
housicon.src = houseIcon;
const pencilIcon = document.querySelector('.pencil-square');
const shielCheck = document.querySelector('.shield-check');
pencilIcon.src = pencilSquare;
shielCheck.src = shieldCheck;
