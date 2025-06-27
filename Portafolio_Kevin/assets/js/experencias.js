// Menú hamburguesa responsive
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
    navToggle.setAttribute('aria-expanded', !expanded);
    navMenu.classList.toggle('open');
    navToggle.classList.toggle('open');
});

// Cerrar menú al hacer click en un enlace (en móvil)
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 700) {
            navMenu.classList.remove('open');
            navToggle.classList.remove('open');
            navToggle.setAttribute('aria-expanded', false);
        }
    });
});

// Sticky header con transición de color al hacer scroll
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Animaciones de aparición al hacer scroll
const fadeEls = document.querySelectorAll('.exp-profile, .exp-articles, .exp-certs, .exp-hero');
fadeEls.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(40px)';
});
window.addEventListener('DOMContentLoaded', () => {
    fadeEls.forEach(el => {
        el.style.transition = 'opacity 1s, transform 1s';
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
    });
});

// ==============================
// SPIDER-VERSE TOGGLE PROFESIONAL
// ==============================
const spiderverseToggle = document.getElementById('spiderverseToggle');
const body = document.body;
const overlay = document.querySelector('.spiderverse-overlay');
const comicDots = document.querySelector('.comic-dots');
const spiderverseSound = document.getElementById('spiderverseSound');
const spiderverseBgSound = document.getElementById('spiderverseBgSound');

// Precarga de sonidos
window.addEventListener('load', () => {
    spiderverseSound.load();
    spiderverseBgSound.load();
});

spiderverseToggle.addEventListener('click', () => {
    // Efecto de sonido
    spiderverseSound.currentTime = 0;
    spiderverseSound.play();
    
    // Alternar modo
    body.classList.toggle('spiderverse-mode');
    
    // Controlar sonido de fondo
    if (body.classList.contains('spiderverse-mode')) {
        spiderverseBgSound.currentTime = 0;
        spiderverseBgSound.play();
        spiderverseToggle.querySelector('.btn-text').textContent = 'DESACTIVAR MODO SPIDER-VERSE';
        
        // Efecto visual de transición
        overlay.style.opacity = '1';
        comicDots.style.opacity = '1';
        
        // Efecto especial en el botón
        spiderverseToggle.classList.add('activated');
        setTimeout(() => spiderverseToggle.classList.remove('activated'), 1000);
    } else {
        spiderverseBgSound.pause();
        spiderverseToggle.querySelector('.btn-text').textContent = 'ACTIVAR MODO SPIDER-VERSE';
        
        // Efecto visual de transición
        overlay.style.opacity = '0';
        comicDots.style.opacity = '0';
    }
    
    // Efecto de partículas al activar/desactivar
    createParticles(spiderverseToggle.getBoundingClientRect().left + spiderverseToggle.offsetWidth/2, 
                   spiderverseToggle.getBoundingClientRect().top + spiderverseToggle.offsetHeight/2);
});

// Función para crear partículas
function createParticles(x, y) {
    const colors = ['#ff3864', '#00f0ff', '#f0ff00'];
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        document.body.appendChild(particle);
        
        const size = Math.random() * 10 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = color;
        particle.style.boxShadow = `0 0 ${size}px ${color}`;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 5 + 5;
        const xVelocity = Math.cos(angle) * velocity;
        const yVelocity = Math.sin(angle) * velocity;
        
        let opacity = 1;
        const fadeInterval = setInterval(() => {
            opacity -= 0.05;
            particle.style.opacity = opacity;
            
            if (opacity <= 0) {
                clearInterval(fadeInterval);
                particle.remove();
            }
        }, 50);
        
        let posX = x;
        let posY = y;
        const moveInterval = setInterval(() => {
            posX += xVelocity;
            posY += yVelocity;
            particle.style.left = `${posX}px`;
            particle.style.top = `${posY}px`;
        }, 30);
        
        setTimeout(() => {
            clearInterval(moveInterval);
        }, 1000);
    }
}
