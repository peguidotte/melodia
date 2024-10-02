const btnMusica = document.querySelector('#music-icon');
const audio = new Audio('assets/BassMeantJazz.mp3');
audio.loop = true;

const menuIcon = document.querySelector('#menu-icon');
const navbarNav = document.querySelector('#navbarNav');

btnMusica.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        btnMusica.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        audio.pause();
        btnMusica.innerHTML = '<i class="fa-solid fa-music"></i>';
    }
})

navbarNav.addEventListener('shown.bs.collapse', () => {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
});

navbarNav.addEventListener('hidden.bs.collapse', () => {
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
});