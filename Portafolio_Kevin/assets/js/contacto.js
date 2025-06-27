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

// Validación de formulario en tiempo real
const form = document.getElementById('contact-form');
const nombre = form.elements['nombre'];
const email = form.elements['email'];
const mensaje = form.elements['mensaje'];
const successMsg = form.querySelector('.form-success');

function showError(input, message) {
    const error = input.parentElement.querySelector('.error-message');
    error.textContent = message;
    input.setAttribute('aria-invalid', 'true');
}

function clearError(input) {
    const error = input.parentElement.querySelector('.error-message');
    error.textContent = '';
    input.removeAttribute('aria-invalid');
}

function validateNombre() {
    if (!nombre.value.trim()) {
        showError(nombre, 'Por favor, ingresa tu nombre.');
        return false;
    }
    clearError(nombre);
    return true;
}

function validateEmail() {
    const value = email.value.trim();
    if (!value) {
        showError(email, 'Por favor, ingresa tu correo.');
        return false;
    }
    // Validación simple de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
        showError(email, 'Correo no válido.');
        return false;
    }
    clearError(email);
    return true;
}

function validateMensaje() {
    if (!mensaje.value.trim()) {
        showError(mensaje, 'Por favor, escribe tu mensaje.');
        return false;
    }
    clearError(mensaje);
    return true;
}

// Eventos de validación en tiempo real
nombre.addEventListener('input', validateNombre);
email.addEventListener('input', validateEmail);
mensaje.addEventListener('input', validateMensaje);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    if (!validateNombre()) valid = false;
    if (!validateEmail()) valid = false;
    if (!validateMensaje()) valid = false;

    if (valid) {
        // Simulación de envío exitoso
        form.reset();
        form.querySelectorAll('.error-message').forEach(e => e.textContent = '');
        successMsg.style.display = 'block';
        setTimeout(() => { successMsg.style.display = 'none'; }, 3500);
    }
});
