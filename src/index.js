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