document.addEventListener('DOMContentLoaded', function() {
    const heroMessage = document.querySelector('.hero-message');
    if (!heroMessage) return;
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

function toggleMobileNav() {
    console.log('clicked');
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.getElementById('mobile-nav');
    const closeBtn = document.querySelector('.close-btn');

    mobileNav.classList.toggle('active');

    // should change display mobile nav to none or flex
    if (mobileNav.classList.contains('active')) {
        mobileNav.style.display = 'flex';
        hamburger.style.display = 'none';
        closeBtn.style.display = 'block';
    } else {
        mobileNav.style.display = 'none';
        if (window.innerWidth <= 1250) {
            hamburger.style.display = 'flex';
            closeBtn.style.display = 'none';
        }
    }
}

// Close mobile nav when clicking outside
document.addEventListener('click', function(event) {
    const mobileNav = document.getElementById('mobile-nav');
    const hamburger = document.querySelector('.hamburger');
    const isClickInsideNav = mobileNav.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);
    const closeBtn = document.querySelector('.close-btn');

    if (!isClickInsideNav && !isClickOnHamburger && mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        hamburger.classList.remove('active');
        closeBtn.style.display = 'none';
    }
});

function updateHamburgerDisplay() {
    const mobileNav = document.getElementById('mobile-nav');
    const hamburger = document.querySelector('.hamburger');
    if (window.innerWidth <= 1250 && !mobileNav.classList.contains('active')) {
        hamburger.style.display = 'flex';
    } else {
        hamburger.style.display = 'none';
    }
}

// Initial check
updateHamburgerDisplay();

// Update on window resize
window.addEventListener('resize', updateHamburgerDisplay);