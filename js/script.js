
// Swiper js
if (document.querySelector(".mySwiper")) {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        grabCursor: true,
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

// slidesPerView permite modificar la cantidad de elementos que se muestran al mismo tiempo
if (document.querySelector(".mySwiperTeam")) {
    var swiperTeam = new Swiper(".mySwiperTeam", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination-team",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next-team",
            prevEl: ".swiper-button-prev-team",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
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

// Botón "Explorar" - Scroll hacia la sección inmediatamente inferior (#about)
const exploreButtons = document.querySelectorAll('.home .button');
const aboutSection = document.querySelector('#about');

exploreButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// WhatsApp

function toggleWhatsAppPopup() {
    var popup = document.getElementById("whatsapp-popup");
    if (popup.style.display === "block") {
        popup.style.display = "none";
    } else {
        popup.style.display = "block";
    }
}

// Business / Students tabs
function switchTab(tabName) {
    document.querySelectorAll('.biz-panel').forEach(function(p) {
        p.classList.add('biz-panel--hidden');
    });
    document.querySelectorAll('.biz-tab').forEach(function(t) {
        t.classList.remove('active');
    });
    var panel = document.getElementById('tab-' + tabName);
    if (panel) {
        panel.classList.remove('biz-panel--hidden');
        revelarContenidoPanel(panel);
    }
    var activeTab = document.querySelector('[data-tab="' + tabName + '"]');
    if (activeTab) activeTab.classList.add('active');
}

// Demo modal
function toggleDemoModal() {
    var overlay = document.getElementById('demo-modal-overlay');
    overlay.classList.toggle('open');
    document.body.style.overflowY = overlay.classList.contains('open') ? 'hidden' : '';
}

function closeDemoModal(event) {
    if (event.target === document.getElementById('demo-modal-overlay')) {
        toggleDemoModal();
    }
}

// ScrollReveal deja en opacity:0 el contenido de los paneles ocultos y nunca lo
// revela, porque dentro de un display:none su geometría cacheada es 0. Al mostrar
// un panel liberamos los elementos que ScrollReveal tenga bajo control.
function revelarContenidoPanel(panel) {
    panel.querySelectorAll('[data-sr-id]').forEach(function (el) {
        el.style.visibility = 'visible';
        el.style.opacity = '1';
        el.style.transform = 'none';
    });
}

// Cursos -> WhatsApp
const WHATSAPP_NUMERO = '51963139952';

const CURSOS_WA = {
    javascript: {
        nombre: 'Curso de JavaScript',
        preguntas: [
            '¿Cuál es el precio y las formas de pago?',
            '¿Cuándo inicia el curso y cuánto dura?',
            '¿Qué horarios hay disponibles?',
            '¿Necesito conocimientos previos de programación?',
            '¿Se ve desarrollo web moderno o frameworks como React?',
            '¿El curso incluye certificado?'
        ]
    },
    python: {
        nombre: 'Curso de Python',
        preguntas: [
            '¿Cuál es el precio y las formas de pago?',
            '¿Cuándo inicia el curso y cuánto dura?',
            '¿Qué horarios hay disponibles?',
            '¿Necesito conocimientos previos de programación?',
            '¿Se ve análisis de datos y automatización?',
            '¿El curso incluye certificado?'
        ]
    },
    basico: {
        nombre: 'Curso de Programación Básica',
        preguntas: [
            '¿Cuál es el precio y las formas de pago?',
            '¿Cuándo inicia el curso y cuánto dura?',
            '¿Qué horarios hay disponibles?',
            '¿Es adecuado si nunca he programado?',
            '¿Qué lenguaje se usa durante el curso?',
            '¿El curso incluye certificado?'
        ]
    }
};

function construirEnlaceCurso(clave) {
    const curso = CURSOS_WA[clave];
    if (!curso) return null;

    const mensaje = `Hola, vengo de la web de AKARI y me interesa el *${curso.nombre}*.\nMe gustaría saber:\n\n`
        + curso.preguntas.map((p, i) => `${i + 1}. ${p}`).join('\n');

    return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
}

document.querySelectorAll('.menuItem-btn[data-curso]').forEach(btn => {
    const enlace = construirEnlaceCurso(btn.dataset.curso);
    if (enlace) btn.href = enlace;
});

// ============================================
// Demo Form — País desplegable + Prefijo Tel
// ============================================

function onPaisChange() {
    const select   = document.getElementById('demo-pais');
    const telInput = document.getElementById('demo-telefono');
    const prefixEl = document.getElementById('demo-phone-prefix');

    if (!select || !telInput || !prefixEl) return;

    const selectedOption = select.options[select.selectedIndex];
    const prefix = selectedOption.getAttribute('data-prefix') || '+';

    // Actualizar prefijo visible
    prefixEl.textContent = prefix;

    // Habilitar campo de teléfono
    telInput.disabled = false;
    telInput.placeholder = 'Número de teléfono *';
    telInput.focus();
}

function submitDemoForm(event) {
    event.preventDefault();

    const pais      = document.getElementById('demo-pais');
    const telefono  = document.getElementById('demo-telefono');
    const prefixEl  = document.getElementById('demo-phone-prefix');
    const nombre    = document.getElementById('demo-nombre');
    const apellido  = document.getElementById('demo-apellido');
    const correo    = document.getElementById('demo-correo');
    const org       = document.getElementById('demo-organizacion');

    // Validar que se seleccionó país
    if (!pais || !pais.value) {
        pais.focus();
        pais.style.borderColor = '#e53935';
        setTimeout(() => { pais.style.borderColor = ''; }, 2000);
        return;
    }

    const selectedOption = pais.options[pais.selectedIndex];
    const prefix  = prefixEl ? prefixEl.textContent : '';
    const paisNombre = selectedOption.text.replace(/[🌎🇵🇪🇲🇽🇨🇴🇦🇷🇨🇱🇪🇨🇧🇴🇵🇾🇺🇾🇻🇪🇧🇷🇺🇸🇪🇸🌐]/gu, '').trim();

    const mensaje = encodeURIComponent(
        `Hola AKARI, vengo de la web y quiero saber más:\n` +
        `Nombre: ${nombre.value} ${apellido.value}\n` +
        `País: ${paisNombre}\n` +
        `Teléfono: ${prefix}${telefono.value}\n` +
        `Organización: ${org.value || 'No indicada'}\n` +
        `Correo: ${correo.value}`
    );

    window.open(`https://wa.me/51963139952?text=${mensaje}`, '_blank');
}
