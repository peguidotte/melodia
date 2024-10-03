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

function adjustCarouselImages() {
    const width = window.innerWidth;

    const images = {
        mobile: [
            "assets/cards/M-Cadastro.svg",
            "assets/cards/M-Navegue=.svg",
            "assets/cards/M-Crie.svg",
            "assets/cards/M-Escute.svg"
        ],
        tablet: [
            "assets/cards/T-Cadastro.svg", 
            "assets/cards/T-Navegue.svg",
            "assets/cards/T-Crie.svg",
            "assets/cards/T-Escute.svg"
        ],
        desktop: [
            "assets/cards/D-Cadastre.svg", 
            "assets/cards/D-Navegue.svg",
            "assets/cards/D-Crie.svg",
            "assets/cards/D-Escute.svg"
        ]
    };

    // Determine qual conjunto de imagens usar
    let currentImages;
    if (width < 768) { // Mobile
        currentImages = images.mobile;
    } else if (width >= 768 && width < 992) { // Tablet
        currentImages = images.tablet;
    } else { // Desktop
        currentImages = images.desktop;
    }

    // Atualize o atributo src das imagens
    document.getElementById('image-1').src = currentImages[0];
    document.getElementById('image-2').src = currentImages[1];
    document.getElementById('image-3').src = currentImages[2];
    document.getElementById('image-4').src = currentImages[3];
}

// Chamar a função no carregamento da página
window.onload = adjustCarouselImages;

// Chamar a função ao redimensionar a janela
window.onresize = adjustCarouselImages;
