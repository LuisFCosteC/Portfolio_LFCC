// js/traduccion.js - Sistema de traducción
export function configurarTraduccion() {
    // Objeto con todas las traducciones al inglés americano
    const traduccionesEN = {
        // Navegación
        'nav-inicio': 'Home',
        'nav-acerca-de-mi': 'About Me',
        'nav-proyectos': 'Projects',
        'nav-certificados': 'Certificates',
        'nav-contactame': 'Contact Me',
        
        // Hero Section
        'saludo-hero': 'Hello, nice to meet you, I am',
        'nombre-hero': 'Luis Fernando Coste Contreras',
        'titulo-hero': 'Full Stack Junior Developer',
        'boton-descargar-cv': 'Download my CV',
        'boton-contratame': 'Hire Me',
        
        // About Me Section
        'titulo-acerca-de-mi': 'About Me',
        'subtitulo-quien-soy': 'Who Am I?',
        'parrafo-sobre-mi': 'I am a Junior Full Stack Developer focused on creating efficient, scalable, and maintainable web applications. I have experience in both backend and frontend, which allows me to comprehensively understand projects and propose practical, well-thought-out solutions. I am passionate about continuous learning and quality software development.',
        'boton-cv-secundario': 'Download CV',
        
        // Technologies Section
        'titulo-tecnologias': 'Technologies I Master',
        'categoria-frontend': 'Frontend',
        'categoria-backend': 'Backend',
        'categoria-extras': 'Extras',
        
        // CV Options
        'opcion-cv-espanol': 'Download CV in Spanish',
        'opcion-cv-ingles': 'Download CV in English',
        'opcion-cv-espanol-secundario': 'Download CV in Spanish',
        'opcion-cv-ingles-secundario': 'Download CV in English'
    };

    // Estado del idioma
    let idiomaActual = 'es';
    let textosOriginales = new Map();

    // Obtener todos los elementos traducibles
    const elementosTraducibles = document.querySelectorAll('.traducible');

    // Guardar textos originales en español
    function guardarTextosOriginales() {
        elementosTraducibles.forEach(elemento => {
            const key = elemento.getAttribute('data-key');
            if (key && !textosOriginales.has(key)) {
                textosOriginales.set(key, elemento.textContent.trim());
            }
        });
    }

    // Cambiar idioma
    function cambiarIdioma(nuevoIdioma) {
        idiomaActual = nuevoIdioma;
        
        // Actualizar atributo lang del HTML
        document.documentElement.lang = nuevoIdioma;
        
        // Actualizar título de la página
        const tituloPagina = document.querySelector('title');
        if (tituloPagina) {
            tituloPagina.textContent = nuevoIdioma === 'en' 
                ? 'Luis F. Coste C. | Full Stack Junior Developer' 
                : 'Luis F. Coste C. | Desarrollador Full Stack Junior';
        }
        
        // Actualizar meta description
        const metaDescripcion = document.querySelector('meta[name="description"]');
        if (metaDescripcion) {
            metaDescripcion.setAttribute('content', nuevoIdioma === 'en'
                ? 'Professional portfolio of Luis Fernando Coste Contreras, Junior Full Stack Developer with 5+ years of experience'
                : 'Portafolio profesional de Luis Fernando Coste Contreras, Desarrollador Full Stack Junior con 5+ años de experiencia');
        }
        
        // Actualizar todos los elementos traducibles
        elementosTraducibles.forEach(elemento => {
            const key = elemento.getAttribute('data-key');
            if (key) {
                if (nuevoIdioma === 'en') {
                    // Cambiar a inglés
                    if (traduccionesEN[key]) {
                        elemento.textContent = traduccionesEN[key];
                    }
                } else {
                    // Volver a español
                    const textoOriginal = textosOriginales.get(key);
                    if (textoOriginal) {
                        elemento.textContent = textoOriginal;
                    }
                }
            }
        });
        
        // Actualizar estado de los botones
        actualizarEstadoBotones();
        
        // Guardar preferencia en localStorage
        localStorage.setItem('idioma-preferido', nuevoIdioma);
    }

    // Actualizar estado visual de los botones
    function actualizarEstadoBotones() {
        const botonTraduccionEscritorio = document.getElementById('botonTraduccionEscritorio');
        const botonTraduccionMovil = document.getElementById('botonTraduccionMovil');
        
        if (idiomaActual === 'en') {
            if (botonTraduccionEscritorio) {
                botonTraduccionEscritorio.classList.add('ingles');
                botonTraduccionEscritorio.querySelector('.texto-boton-traduccion').textContent = 'ES';
            }
            if (botonTraduccionMovil) {
                botonTraduccionMovil.classList.add('ingles');
                botonTraduccionMovil.querySelector('.texto-boton-traduccion').textContent = 'Switch to Spanish';
            }
        } else {
            if (botonTraduccionEscritorio) {
                botonTraduccionEscritorio.classList.remove('ingles');
                botonTraduccionEscritorio.querySelector('.texto-boton-traduccion').textContent = 'EN';
            }
            if (botonTraduccionMovil) {
                botonTraduccionMovil.classList.remove('ingles');
                botonTraduccionMovil.querySelector('.texto-boton-traduccion').textContent = 'Switch to English';
            }
        }
    }

    // Configurar event listeners para botones
    function configurarBotonesTraduccion() {
        const botonTraduccionEscritorio = document.getElementById('botonTraduccionEscritorio');
        const botonTraduccionMovil = document.getElementById('botonTraduccionMovil');
        
        if (botonTraduccionEscritorio) {
            botonTraduccionEscritorio.addEventListener('click', () => {
                cambiarIdioma(idiomaActual === 'es' ? 'en' : 'es');
            });
        }
        
        if (botonTraduccionMovil) {
            botonTraduccionMovil.addEventListener('click', () => {
                cambiarIdioma(idiomaActual === 'es' ? 'en' : 'es');
            });
        }
    }

    // Cargar idioma preferido desde localStorage
    function cargarIdiomaPreferido() {
        const idiomaGuardado = localStorage.getItem('idioma-preferido');
        if (idiomaGuardado && (idiomaGuardado === 'es' || idiomaGuardado === 'en')) {
            cambiarIdioma(idiomaGuardado);
        }
    }

    // Inicializar sistema de traducción
    function inicializar() {
        guardarTextosOriginales();
        configurarBotonesTraduccion();
        cargarIdiomaPreferido();
        
        console.log('Sistema de traducción inicializado. Idioma actual:', idiomaActual);
    }

    // Devolver funciones públicas
    return {
        inicializar,
        cambiarIdioma,
        obtenerIdiomaActual: () => idiomaActual
    };
}