function loadLanguage(lang) {
  fetch("lang/"+ lang + '.json')
      .then(response => response.json())
      .then(data => {
          document.querySelectorAll('[data-i18n]').forEach(element => {
              const key = element.getAttribute('data-i18n');
              element.textContent = data[key];
          });
      });
}

function setLanguage(lang) {
  localStorage.setItem('selectedLanguage', lang);
  loadLanguage(lang);

  // Resaltar el botón del idioma seleccionado
  document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.remove('selected');
      if (btn.getAttribute('data-lang') === lang) {
          btn.classList.add('selected');
      }
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', function() {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
  });
});

// Al cargar la página, verifica si hay un idioma guardado en localStorage
const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
setLanguage(savedLanguage);
