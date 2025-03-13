const openMenuBtn = document.getElementById('open-menu');
const closeMenuBtn = document.querySelector('.close-menu');

openMenuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);

function openMenu() {
    document.querySelector('nav ul').style.display = 'flex';
    // openMenuBtn.style.display = 'none';
    document.querySelector('body').style.overflowY = 'hidden';
    document.querySelector('.backdrop').style.display = 'block';
}

function closeMenu() {
    document.querySelector('nav ul').style.display = 'none';
    // openMenuBtn.style.display = 'inline-block';
    document.querySelector('body').style.overflowY = 'auto';
    document.querySelector('.backdrop').style.display = 'none';
}