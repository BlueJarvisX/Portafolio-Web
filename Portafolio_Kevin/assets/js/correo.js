// Validación de formulario en tiempo real
const form = document.getElementById('contact-form');
const nombre = form.elements['nombre'];
const email = form.elements['email'];
const asunto = form.elements['asunto'];
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

function validateAsunto() {
    if (!asunto.value.trim()) {
        showError(asunto, 'Por favor, ingresa el asunto.');
        return false;
    }
    clearError(asunto);
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
asunto.addEventListener('input', validateAsunto);
mensaje.addEventListener('input', validateMensaje);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    if (!validateNombre()) valid = false;
    if (!validateEmail()) valid = false;
    if (!validateAsunto()) valid = false;
    if (!validateMensaje()) valid = false;

    if (valid) {
        // Simulación de envío exitoso
        form.reset();
        form.querySelectorAll('.error-message').forEach(e => e.textContent = '');
        successMsg.style.display = 'block';
        setTimeout(() => { successMsg.style.display = 'none'; }, 3500);
    }
});
