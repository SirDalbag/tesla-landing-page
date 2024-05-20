const menuButton = document.querySelector('.menu-button');
const closeButton = document.querySelector('close-button');
const aside = document.querySelector('aside');

function openAside() {
  aside.classList.add('open');
}

function closeAside() {
  aside.classList.remove('open');
}