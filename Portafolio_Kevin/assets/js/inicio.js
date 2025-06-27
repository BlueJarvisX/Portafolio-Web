// Menú 
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
    navToggle.setAttribute('aria-expanded', !expanded);
    navMenu.classList.toggle('open');
    navToggle.classList.toggle('open');
});

// Cerrar menú al hacer click en un enlace
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
const fadeEls = document.querySelectorAll('.about, .hero');
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

// ===== SPIDER-VERSO TOGGLE (añadir al final) =====
const spiderToggle = document.getElementById('spider-toggle');
const body = document.body;
const effectsContainer = document.getElementById('spider-effects');

function createSpiderEffects() {
    effectsContainer.innerHTML = '';
    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.classList.add('spider-particle');
        particle.style.width = `${Math.random() * 15 + 5}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.background = i % 2 === 0 ? '#ff0022' : '#00a1e4';
        particle.style.animationDuration = `${Math.random() * 4 + 2}s`;
        effectsContainer.appendChild(particle);
    }
}

spiderToggle.addEventListener('click', () => {
    body.classList.toggle('spider-verse');
    if (body.classList.contains('spider-verse')) {
        spiderToggle.textContent = '🚀 Modo Normal';
        createSpiderEffects();
    } else {
        spiderToggle.textContent = '🕷️ Modo Spider-Verso';
        effectsContainer.innerHTML = '';
    }
});
