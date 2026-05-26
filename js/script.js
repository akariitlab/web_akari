
// Swiper js
if (document.querySelector(".mySwiper")) {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        //grabCursor: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next", // Fixed typo here
            prevEl: ".swiper-button-prev",
        },
    });
}

// Nav open close
const body = document.querySelector('body'),
    navMenu = body.querySelector('.menu-content'),
    navOpenBtn = body.querySelector('.navOpen-btn'),
    navCloseBtn = navMenu.querySelector('.navClose-btn');

if (navMenu && navOpenBtn) {
    navOpenBtn.addEventListener("click", () => {
        navMenu.classList.add("open");
        //body.style.overflowY = "hidden";
    })
}

if (navMenu && navCloseBtn) {
    navCloseBtn.addEventListener("click", () => {
        navMenu.classList.remove("open");
        //body.style.overflowY = "scroll";
    })
}
// Change header bg color
window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    const header = document.querySelector("header");

    if (header && header.classList.contains("header-always-active")) {
        return;
    }

    if (scrollY > 5) {
        header.classList.add("header-active");
    } else {
        header.classList.remove("header-active");
    }
})

// Scroll up button

const scrollUpBtn = document.querySelector(".scrollUp-btn");
if (scrollY > 250) {
    scrollUpBtn.classList.add("scrollUpBtn-active");
} else {
    scrollUpBtn.classList.remove("scrollUpBtn-active");
}

// Nav link indicator
const sections = document.querySelectorAll('section[id]');

sections.forEach(section => {
    const sectionHeight = section.offsetHeight,
        sectionTop = section.offsetTop - 60;

    let navId = document.querySelector(`.menu-content a[href*=${section.id}]`);

    if (navId) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navId.classList.add("active-navlink")
        } else {
            navId.classList.remove("active-navlink")
        }

        navId.addEventListener("click", () => {
            navMenu.classList.remove("open");
            body.style.overflowY = "scroll";
        })
    }
})


// Scroll Reveal Animation
if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400
    })

    sr.reveal(`.section-tite, .section-subtitle, .section-description, .brand-images, .testimonial, .newsletter .logo-content, .newsletter-inputBox, .newsletter-mediaIcon, .footer-content, .footer-links`, { interval: 100, });

    sr.reveal(`.about-imageContent, .menu-items`, { origin: 'left' });
    sr.reveal(`.about-details, .time-table`, { origin: 'right' });
}

// WhatsApp

function toggleWhatsAppPopup() {
    var popup = document.getElementById("whatsapp-popup");
    if (popup.style.display === "block") {
        popup.style.display = "none";
    } else {
        popup.style.display = "block";
    }
}
