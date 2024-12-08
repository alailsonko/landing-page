document.addEventListener('DOMContentLoaded', function() {
    const heroMessage = document.querySelector('.hero-message');
    setTimeout(() => {
        heroMessage.classList.add('show');
    }, 500); // Adjust delay as needed
});

document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var fixedNavbar = document.querySelector('.fixed-navbar');
    var navbarHeight = navbar.offsetHeight;

    if (window.scrollY > navbarHeight) {
        fixedNavbar.style.display = 'block';
    } else {
        fixedNavbar.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
