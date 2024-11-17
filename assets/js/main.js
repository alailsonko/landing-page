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