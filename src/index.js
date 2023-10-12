import './style.css';

// Menu mobile
const menuButton = document.querySelector('header button');
const menuImg = menuButton.querySelector('img');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
  if (menuImg.src.includes('menu.png')) {
    menuImg.src = './assets/resources/images/close.png';
    nav.classList.add('active');
  } else {
    menuImg.src = './assets/resources/images/menu.png';
    nav.classList.remove('active');
  }
  menuButton.blur(); // Remove focus from button
});

// Navigation bar submenu
const dropdownBuy = document.getElementById('dropdown-buy');
const dropdownRent = document.getElementById('dropdown-rent');
const submenuBuy = document.getElementById('submenu-buy');
const submenuRent = document.getElementById('submenu-rent');
const navBuy = document.getElementById('nav-buy');
const navRent = document.getElementById('nav-rent');

dropdownBuy.addEventListener('click', () => {
  if (submenuBuy.style.display === 'none') {
    submenuBuy.style.display = 'flex';
  } else {
    submenuBuy.style.display = 'none';
  }
});

dropdownRent.addEventListener('click', () => {
  if (submenuRent.style.display === 'none') {
    submenuRent.style.display = 'flex';
  } else {
    submenuRent.style.display = 'none';
  }
});

// Add an event handler to hide the submenu when the mouse leaves the <li> element
navBuy.addEventListener('mouseleave', () => {
  submenuBuy.style.display = 'none';
});

navRent.addEventListener('mouseleave', () => {
  submenuRent.style.display = 'none';
});
