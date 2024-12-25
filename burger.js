const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const overlay = document.querySelector('.overlay');
const exit = document.querySelector('.menu-exit');
const black = document.getElementById('link-black');
const green = document.getElementById('link-green');
const white = document.getElementById('link-white');
const oolong = document.getElementById('link-oolong');
const puerh = document.getElementById('link-puerh');

burger.addEventListener('click', function() {
  if (!menu.classList.contains('opened')) {
    menu.classList.add('opened');
    overlay.classList.add('active'); 
  } else {
    menu.classList.remove('opened');
    overlay.classList.remove('active');
  }
});

exit.addEventListener('click', function() {
  menu.classList.remove('opened');
  overlay.classList.remove('active');
});

black.addEventListener('click', function() {
  menu.classList.remove('opened');
  overlay.classList.remove('active');
});

green.addEventListener('click', function() {
  menu.classList.remove('opened');
  overlay.classList.remove('active');
});

white.addEventListener('click', function() {
  menu.classList.remove('opened');
  overlay.classList.remove('active');
});

oolong.addEventListener('click', function() {
  menu.classList.remove('opened');
  overlay.classList.remove('active');
});

puerh.addEventListener('click', function() {
  menu.classList.remove('opened');
  overlay.classList.remove('active');
});