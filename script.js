const btnMusica = document.querySelector('#music-icon');
const audio = new Audio('assets/BassMeantJazz.mp3');
audio.loop = true;

const menuIcon = document.querySelector('#menu-icon');
const navbarNav = document.querySelector('#navbarNav');

let lastScrollTop = 0;
const navbar = document.querySelector('nav');
let scrollTimeout;

btnMusica.addEventListener('click', (e) => {
    e.preventDefault();
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

document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const navbarHeight = navbar.offsetHeight;

        window.scrollTo({
            top: targetElement.offsetTop - navbarHeight/3,
            behavior: 'smooth'
        });
    });
});
