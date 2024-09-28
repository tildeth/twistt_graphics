const menuButton = document.querySelector('.menu_button');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('open');
});