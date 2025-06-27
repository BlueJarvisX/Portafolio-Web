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

// Datos de proyectos (puedes editar/agregar más)
const projects = [
    {
        title: "Techsoluciones Final",
        desc: "Aplicación web para ofrecer soluciones tecnológicas innovadoras y proyectos en equipo, con testimonios y servicios.",
        img: "assets/img/Tech.png",
        techs: ["JavaScript", "css", "html"],
        links: [
            { url: "https://github.com/BlueJarvisX/Tech-Soluciones", label: "GitHub" }
        ],
        filter: ["javascript", "css", "html"]
    },
    {
        title: "Biblioteca Virtual",
        desc: "Gestión de biblioteca virtual con catálogo, préstamos y devoluciones, autenticación de usuarios.",
        img: "assets/img/Biblioteca.png",
        techs: ["JavaScript", "css", "JSON", "Express", "database"],
        links: [
            { url: "https://github.com/BlueJarvisX/Biblioteca-Virtual", label: "GitHub" }
        ],
        filter: ["JavaScript", "css", "JSON", "Express", "database"]
    },
    {
        title: "Sistema de Mensajería",
        desc: "Un Informe de Gestión de Envíos de Mensajes, Utilizando los Patrones de diseño: Singleton, Bridge, Adapter y Prototype.",
        img: "assets/img/Informe.png",
        techs: ["Java"],
        links: [
            { url: "https://github.com/BlueJarvisX/Mensajer-a", label: "GitHub" }
        ],
        filter: ["Java"]
    },
    {
        title: "Gestión de Inventario",
        desc: "Gestión de Productos, Busqueda por nombre, Lista de Productos y Notificaciones de stock a través de un Bot de Telegram:",
        img: "assets/img/GestiónInventario.png",
        techs: ["HTML", "css", "JavaScript", "JSON", "Express", "database"],
        links: [
            { url: "https://github.com/BlueJarvisX/Gesti-n-De-Inventario", label: "GitHub" },
            { url: "https://telegram.me/BotFather", label: "Link Bot" }
        ],
        filter: ["Javascript", "css", "html", "JSON", "Express", "database"]
    },
    {
        title: "Integración de Competencias",
        desc: "Informe y Prototipo de un sistema de gestión de estacionamiento",
        img: "assets/img/EstacionamientoPrototipo.png",
        techs: ["JavaScript", "css", "html"],
        links: [
            { url: "https://github.com/BlueJarvisX/Integraci-n-de-Competencias", label: "GitHub" }
        ],
        filter: ["JavaScript", "css", "html"]
    },
    {
        title: "Portafolio",
        desc: "Portafolio personal con proyectos destacados, habilidades y contacto.",
        img: "assets/img/mew.jpg",
        techs: ["JavaScript", "css", "html"],
        links: [
            { url: "https://github.com/kevin/sistema-reservas", label: "GitHub" }
        ],
        filter: ["javascript", "css", "html"]
    }
];

// Renderizado dinámico de tarjetas
const grid = document.getElementById('projects-grid');
const filterSelect = document.getElementById('filter-tech');

function renderProjects(filter) {
    grid.innerHTML = '';
    let filtered = projects;
    if (filter && filter !== 'all') {
        filtered = projects.filter(p => p.filter.includes(filter));
    }
    if (filtered.length === 0) {
        grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;">No hay proyectos para esta tecnología.</p>';
        return;
    }
    filtered.forEach(project => {
        const card = document.createElement('article');
        card.className = 'project-card';
        card.tabIndex = 0;
        card.innerHTML = `
            <img src="${project.img}" alt="Imagen de ${project.title}" class="project-img" />
            <div class="project-content">
                <h2 class="project-title">${project.title}</h2>
                <p class="project-desc">${project.desc}</p>
                <div class="project-techs">
                    ${project.techs.map(tech => `<span class="project-tech">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.links.map(link => `<a href="${link.url}" class="project-link" target="_blank" rel="noopener">${link.label}</a>`).join('')}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Filtro por tecnología
filterSelect.addEventListener('change', e => {
    renderProjects(e.target.value);
});

// Animación de aparición al cargar
window.addEventListener('DOMContentLoaded', () => {
    renderProjects('all');
    // Animación de fadeIn para grid
    grid.style.opacity = 0;
    grid.style.transform = 'translateY(40px)';
    setTimeout(() => {
        grid.style.transition = 'opacity 1s, transform 1s';
        grid.style.opacity = 1;
        grid.style.transform = 'translateY(0)';
    }, 100);
});
