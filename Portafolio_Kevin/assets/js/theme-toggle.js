// modo claro/oscuro con persistencia en localStorage
(function() {
    const body = document.body;
    const toggleBtn = document.getElementById('theme-toggle');
    const storageKey = 'theme-mode';

    function setMode(mode) {
        if (mode === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
        localStorage.setItem(storageKey, mode);
    }

    // Detectar preferencia inicial
    function getPreferredMode() {
        const stored = localStorage.getItem(storageKey);
        if (stored) return stored;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    // Inicializar
    setMode(getPreferredMode());

    // Evento de botón
    toggleBtn.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-mode');
        setMode(isDark ? 'light' : 'dark');
    });
})();
