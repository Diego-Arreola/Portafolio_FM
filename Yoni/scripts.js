let currentLanguage = 'en'; // Idioma predeterminado

function loadLanguage(lang) {
    // Carga el archivo JSON correspondiente al idioma seleccionado
    fetch("lang/" + lang + '.json')
        .then(response => response.json())
        .then(data => {
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                element.textContent = data[key];
            });
        });
}

function setLanguage(lang) {
    // Guarda el idioma seleccionado en localStorage
    localStorage.setItem('selectedLanguage', lang);
    loadLanguage(lang);
}

document.getElementById('toggleLanguage').addEventListener('click', function() {
    // Cambia el idioma
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    setLanguage(currentLanguage);
});

// Al cargar la página, verifica si hay un idioma guardado en localStorage
const savedLanguage = localStorage.getItem('selectedLanguage');
if (savedLanguage) {
    currentLanguage = savedLanguage;
}
loadLanguage(currentLanguage);
