// script para Análisis.js
document.addEventListener('DOMContentLoaded', function() {
    const AnálisisLink = document.querySelector('.scroll-to');
    const   AnálisisSection = document.getElementById('Análisis');

    // Agrega un event listener para el enlace de proyectos
    proyectosLink.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Muestra la sección de Análisis al agregar la clase 'show'
        AnálisisSection.classList.add('show');
    });
});

// script para Proyectos.js
document.addEventListener('DOMContentLoaded', function() {
    const proyectosLink = document.querySelector('.scroll-to');
    const proyectosSection = document.getElementById('Proyectos');

    // Agrega un event listener para el enlace de Proyectos
    proyectosLink.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Muestra la sección de Proyectos al agregar la clase 'show'
        proyectosSection.classList.add('show');
    });
});

// script para Team.js
document.addEventListener('DOMContentLoaded', function() {
    const TeamLink = document.querySelector('.scroll-to');
    const TeamSection = document.getElementById('Team');

    // Agrega un event listener para el enlace de Team
    proyectosLink.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Muestra la sección de Team al agregar la clase 'show'
        TeamSection.classList.add('show');
    });
});

