import { reproducirAnimaciones } from './animaciones.js';

export function configurarTraduccion() {
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
        
        // About Me Section
        'titulo-acerca-de-mi': 'About Me',
        'subtitulo-quien-soy': 'Who Am I?',
        'parrafo-sobre-mi': 'I am a Junior Full Stack Developer focused on creating efficient, scalable, and maintainable web applications. I have experience in both backend and frontend, which allows me to comprehensively understand projects and propose practical, well-thought-out solutions. I am passionate about continuous learning and quality software development.',
        
        // Technologies Section
        'titulo-tecnologias': 'Technologies I Master',
        'categoria-frontend': 'Frontend',
        'categoria-backend': 'Backend',
        'categoria-extras': 'Additional',
        
        // CV Options
        'opcion-cv-espanol': 'Download CV in Spanish',
        'opcion-cv-ingles': 'Download CV in English',

        // Projects
        'titulo-proyectos': 'Projects',
        'desc-proyecto1': 'Halloween-themed web application where users can register and receive 4 tokens per day to upload 4 images and change their backgrounds.',
        'desc-proyecto2': 'Main page of the Mikhuy project, a university cafeteria manager, a group project about to be deployed.',
        
        // Certificates
        'titulo-certificados': 'Certificates',
        'subtitulo-certificados': 'Professional certifications and achievements that demonstrate my experience and continuous learning.',
        'ver-certificado': 'View certificate',
        'boton-ver-certificados': 'View certificates', // NUEVA CLAVE
        'cert-graphql-desc': 'Basic course',
        'cert-angular-desc': 'Creation and optimization of web forms',
        'cert-arrays-desc': 'Array manipulation',
        'cert-solid-desc': 'SOLID, DRY and Clean Code',
        'cert-herrera-desc': 'Node.js course',
        'cert-ts-desc': 'Fundamentals and advanced types',
    };

    let idiomaActual = 'es';
    let textosOriginales = new Map();

    const elementosTraducibles = document.querySelectorAll('.traducible:not(#botonTraduccionMovil .texto-boton-traduccion)');

    function guardarTextosOriginales() {
        elementosTraducibles.forEach(elemento => {
            const key = elemento.getAttribute('data-key');
            if (key && !textosOriginales.has(key)) {
                textosOriginales.set(key, elemento.textContent);
            }
        });
    }

    function cambiarIdioma(nuevoIdioma) {
        idiomaActual = nuevoIdioma;
        document.documentElement.lang = nuevoIdioma;
        
        const tituloPagina = document.querySelector('title');
        if (tituloPagina) {
            tituloPagina.textContent = nuevoIdioma === 'en' 
                ? 'Luis F. Coste C. | Full Stack Junior Developer' 
                : 'Luis F. Coste C. | Desarrollador Full Stack Junior';
        }
        
        const metaDescripcion = document.querySelector('meta[name="description"]');
        if (metaDescripcion) {
            metaDescripcion.setAttribute('content', nuevoIdioma === 'en'
                ? 'Professional portfolio of Luis Fernando Coste Contreras, Junior Full Stack Developer with 5+ years of experience'
                : 'Portafolio profesional de Luis Fernando Coste Contreras, Desarrollador Full Stack Junior con 5+ años de experiencia');
        }
        
        elementosTraducibles.forEach(elemento => {
            const key = elemento.getAttribute('data-key');
            if (key) {
                if (nuevoIdioma === 'en') {
                    if (traduccionesEN[key]) {
                        elemento.textContent = traduccionesEN[key];
                    }
                } else {
                    const textoOriginal = textosOriginales.get(key);
                    if (textoOriginal) {
                        elemento.textContent = textoOriginal;
                    }
                }
            }
        });
        
        actualizarEstadoBotones();
        localStorage.setItem('idioma-preferido', nuevoIdioma);
        
        // Reproducir animaciones después de cambiar idioma
        reproducirAnimaciones();
    }

    function actualizarEstadoBotones() {
        const botonEscritorio = document.getElementById('botonTraduccionEscritorio');
        const botonMovil = document.getElementById('botonTraduccionMovil');
        
        if (idiomaActual === 'en') {
            if (botonEscritorio) {
                botonEscritorio.classList.add('ingles');
                botonEscritorio.querySelector('.texto-boton-traduccion').textContent = 'ES';
            }
            if (botonMovil) {
                botonMovil.classList.add('ingles');
                const span = botonMovil.querySelector('.texto-boton-traduccion');
                if (span) span.textContent = 'Switch to Spanish';
            }
        } else {
            if (botonEscritorio) {
                botonEscritorio.classList.remove('ingles');
                botonEscritorio.querySelector('.texto-boton-traduccion').textContent = 'EN';
            }
            if (botonMovil) {
                botonMovil.classList.remove('ingles');
                const span = botonMovil.querySelector('.texto-boton-traduccion');
                if (span) span.textContent = 'Switch to English';
            }
        }
    }

    function configurarBotonesTraduccion() {
        const botonEscritorio = document.getElementById('botonTraduccionEscritorio');
        const botonMovil = document.getElementById('botonTraduccionMovil');
        
        if (botonEscritorio) {
            botonEscritorio.addEventListener('click', () => {
                cambiarIdioma(idiomaActual === 'es' ? 'en' : 'es');
            });
        }
        
        if (botonMovil) {
            botonMovil.addEventListener('click', () => {
                cambiarIdioma(idiomaActual === 'es' ? 'en' : 'es');
            });
        }
    }

    function cargarIdiomaPreferido() {
        const guardado = localStorage.getItem('idioma-preferido');
        if (guardado && (guardado === 'es' || guardado === 'en')) {
            cambiarIdioma(guardado);
        }
    }

    function inicializar() {
        guardarTextosOriginales();
        configurarBotonesTraduccion();
        cargarIdiomaPreferido();
        console.log('Sistema de traducción inicializado. Idioma actual:', idiomaActual);
    }

    return {
        inicializar,
        cambiarIdioma,
        obtenerIdiomaActual: () => idiomaActual
    };
}