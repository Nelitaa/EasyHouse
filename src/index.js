import './style.css';
import logo from'./images/logo.png';
import arrow_down from './images/arrow-down.png';
import house_icon from './images/house-icon.svg';
import pencil_square from './images/pencil-icon.svg';
import shield_check from './images/shield-icon.svg';
import house1 from './images/house1.jpg';
import house2 from './images/house2.jpg';
import house3 from './images/house3.jpg';
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
//desktop menu
const homeLogo = document.querySelector('.logoImg');
homeLogo.src = logo;
const dropdownMenu = document.querySelector('.menu_dropdown_arrow');
dropdownMenu.src = arrow_down;
const house_Icon = document.querySelector('.house_icon');
house_Icon.src = house_icon;
const pencil_Icon = document.querySelector('.pencil-square');
const shiel_Check = document.querySelector('.shield-check');
pencil_Icon.src = pencil_square;
shiel_Check.src = shield_check;
const houseImg1 = document.querySelector('.estate_image1');
const houseImg2 = document.querySelector('.estate_image2');
const houseImg3 = document.querySelector('.estate_image3');
houseImg1.src = house1;
houseImg2.src = house2;
houseImg3.src = house3;