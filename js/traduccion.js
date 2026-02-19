import { reproducirAnimaciones } from './animaciones.js';

export function configurarTraduccion() {
    // ============================================
    // TRADUCCIONES INGLÉS
    // Organizadas por secciones
    // ============================================
    const traduccionesEN = {
        // ------------------------------------------
        // Navegación
        // ------------------------------------------
        'nav-inicio': 'Home',
        'nav-acerca-de-mi': 'About Me',
        'nav-proyectos': 'Projects',
        'nav-certificados': 'Certificates',
        'nav-contactame': 'Contact Me',

        // ------------------------------------------
        // Hero Section
        // ------------------------------------------
        'saludo-hero': 'Hello, nice to meet you, I am',
        'nombre-hero': 'Luis Fernando Coste Contreras',
        'titulo-hero': 'Software Developer',

        // ------------------------------------------
        // About Me Section
        // ------------------------------------------
        'titulo-acerca-de-mi': 'About Me',
        'subtitulo-quien-soy': 'Who Am I?',
        'parrafo-sobre-mi': 'I am a Junior Full Stack Developer focused on creating efficient, scalable, and maintainable web applications. I have theoretical experience in both backend and frontend, which allows me to comprehensively understand projects and propose practical, well-thought-out solutions. I am passionate about continuous learning and quality software development.',

        // ------------------------------------------
        // Technologies Section
        // ------------------------------------------
        'titulo-tecnologias': 'Technologies I Master',
        'categoria-frontend': 'Frontend',
        'categoria-backend': 'Backend',
        'categoria-extras': 'Additional',

        // ------------------------------------------
        // CV Options (botones desplegables)
        // ------------------------------------------
        'opcion-cv-espanol': 'Download CV in Spanish',
        'opcion-cv-ingles': 'Download CV in English',

        // ------------------------------------------
        // Projects Section
        // ------------------------------------------
        'titulo-proyectos': 'Projects',
        'fecha-proyecto1': 'October 9, 2024',
        'desc-proyecto1': 'Halloween-themed web application where users can register and receive 4 tokens per day to upload 4 images and change their backgrounds.',
        'boton-codigo': 'Code',
        'boton-demo': 'Live Demo',

        // ------------------------------------------
        // Certificates Section
        // ------------------------------------------
        'titulo-certificados': 'Certificates',
        'subtitulo-certificados': 'Professional certifications and achievements that demonstrate my experience and continuous learning.',
        'ver-certificado': 'View certificate →',
        'boton-ver-certificados': 'View certificates',
        'boton-cerrar-certificados': 'Close certificates',

        // Badges de plataformas (nombres propios, se mantienen igual o se traducen si aplica)
        'badge-meta': 'Meta',
        'badge-cisco': 'Cisco Networking Academy',
        'badge-udemy': 'Udemy',
        'badge-linkedin': 'LinkedIn Learning',
        'badge-microsoft-linkedin': 'Microsoft and LinkedIn',
        'badge-compensar': 'compensar and EDU',

        // Títulos de certificados
        'cert-titulo-1': 'Introduction to Android Mobile App Development',
        'cert-titulo-2': 'JavaScript Essentials 1',
        'cert-titulo-3': 'Introduction to Data Science',
        'cert-titulo-4': 'Python Essentials 1',
        'cert-titulo-5': 'C# TOTAL - Expert Programmer in 28 days',
        'cert-titulo-6': 'Programming Fundamentals',
        'cert-titulo-7': 'Professional Software Development Fundamentals',
        'cert-titulo-8': 'Professional Data Analysis Fundamentals',
        'cert-titulo-9': 'Learn Data Analysis',
        'cert-titulo-10': 'Learn Data Science: Basics',
        'cert-titulo-11': 'Learn Data Science: Tell Stories with Data',
        'cert-titulo-12': 'Introduction to Professional Skills in Data Analysis',
        'cert-titulo-13': 'Learn SQL with MySQL 8 (2023)',
        'cert-titulo-14': 'Intermediate Excel',

        // Descripciones cortas de certificados
        'cert-desc-2': 'Basic JavaScript syntax',
        'cert-desc-3': 'Basic concepts of data analysis, data engineering, data science',
        'cert-desc-4': 'Computer programming knowledge, Python syntax and semantics',

        // Fechas de certificados (formato inglés)
        'fecha-cert-1': 'May 15, 2025',
        'fecha-cert-2': 'January 31, 2024',
        'fecha-cert-3': 'October 25, 2023',
        'fecha-cert-4': 'October 2, 2023',
        'fecha-cert-5': 'June 17, 2023',
        'fecha-cert-6': 'June 14, 2023',
        'fecha-cert-7': 'June 11, 2023',
        'fecha-cert-8': 'June 11, 2023',
        'fecha-cert-9': 'June 10, 2023',
        'fecha-cert-10': 'June 10, 2023',
        'fecha-cert-11': 'June 10, 2023',
        'fecha-cert-12': 'June 9, 2023',
        'fecha-cert-13': 'June 3, 2023',
        'fecha-cert-14': 'June 3, 2023',

        // ------------------------------------------
        // Contact Section
        // ------------------------------------------
        'titulo-contacto': 'Contact Me',
        'subtitulo-contacto': 'Cultivate connections: get in touch with me and let\'s connect',
        'label-nombre': 'Name',
        'label-email': 'Email',
        'label-telefono': 'Phone',
        'label-servicio': 'Service of interest',
        'opcion-web': 'Web Development',
        'opcion-movil': 'Mobile App',
        'opcion-otro': 'Other',
        'label-tiempo': 'Estimated timeline',
        'tiempo-urgente': 'Urgent (1-2 weeks)',
        'tiempo-normal': 'Normal (3-4 weeks)',
        'tiempo-largo': 'Long term (more than 1 month)',
        'label-detalles': 'Project details...',
        'placeholder-detalles': 'Tell me about your project...',
        'boton-enviar': 'Send message',

        // ------------------------------------------
        // Footer
        // ------------------------------------------
        'footer-contacto': 'Contact me:',
        'copyright': 'All rights reserved.',
        'powered-by': 'Powered by Luis F. Coste C.',

        // ------------------------------------------
        // Botones adicionales
        // ------------------------------------------
        'boton-cv': 'Resume',
    };

    let idiomaActual = 'es';
    let textosOriginales = new Map();
    let placeholdersOriginales = new Map();

    const elementosTraducibles = document.querySelectorAll('.traducible:not(#botonTraduccionMovil .texto-boton-traduccion)');
    const elementosConPlaceholder = document.querySelectorAll('[data-placeholder-key]');

    // Guarda los textos originales en español
    function guardarTextosOriginales() {
        elementosTraducibles.forEach(elemento => {
            const key = elemento.getAttribute('data-key');
            if (key && !textosOriginales.has(key)) {
                textosOriginales.set(key, elemento.textContent);
            }
        });
        // Guardar también el texto para el botón de cerrar certificados (dinámico)
        textosOriginales.set('boton-cerrar-certificados', 'Cerrar certificados');
        
        // Guardar placeholders originales
        elementosConPlaceholder.forEach(el => {
            const key = el.getAttribute('data-placeholder-key');
            if (key && !placeholdersOriginales.has(key)) {
                placeholdersOriginales.set(key, el.placeholder);
            }
        });
    }

    // Cambia el idioma actual y actualiza todos los textos y placeholders
    function cambiarIdioma(nuevoIdioma) {
        idiomaActual = nuevoIdioma;
        document.documentElement.lang = nuevoIdioma;
        
        // Actualizar título y meta descripción
        const tituloPagina = document.querySelector('title');
        if (tituloPagina) {
            tituloPagina.textContent = nuevoIdioma === 'en' 
                ? 'Luis F. Coste C. | Software Developer' 
                : 'Luis F. Coste C. | Desarrollador de Software';
        }
        
        const metaDescripcion = document.querySelector('meta[name="description"]');
        if (metaDescripcion) {
            metaDescripcion.setAttribute('content', nuevoIdioma === 'en'
                ? 'Professional portfolio of Luis Fernando Coste Contreras, Junior Full Stack Developer with 5+ years of experience'
                : 'Portafolio profesional de Luis Fernando Coste Contreras, Desarrollador Full Stack Junior con 5+ años de experiencia');
        }
        
        // Traducir textos de elementos con clase .traducible
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

        // Traducir placeholders
        elementosConPlaceholder.forEach(el => {
            const key = el.getAttribute('data-placeholder-key');
            if (key) {
                if (nuevoIdioma === 'en') {
                    if (traduccionesEN[key]) {
                        el.placeholder = traduccionesEN[key];
                    }
                } else {
                    const placeholderOriginal = placeholdersOriginales.get(key);
                    if (placeholderOriginal) {
                        el.placeholder = placeholderOriginal;
                    }
                }
            }
        });
        
        actualizarEstadoBotones();
        localStorage.setItem('idioma-preferido', nuevoIdioma);
        
        // Reproducir animaciones después de cambiar idioma
        reproducirAnimaciones();
    }

    // Actualiza el texto de los botones de traducción (EN/ES)
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

    // Configura los eventos de los botones de traducción
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

    // Carga el idioma guardado en localStorage al iniciar
    function cargarIdiomaPreferido() {
        const guardado = localStorage.getItem('idioma-preferido');
        if (guardado && (guardado === 'es' || guardado === 'en')) {
            cambiarIdioma(guardado);
        }
    }

    // Inicialización del sistema de traducción
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

// Función para el botón "Ver más certificados" (ya estaba, se mantiene igual)
export function configurarVerMasCertificados() {
    const grid = document.getElementById('gridCertificados');
    if (!grid) return;

    const tarjetas = Array.from(grid.querySelectorAll('.tarjeta-certificado'));
    const totalTarjetas = tarjetas.length;
    const iniciales = 8;

    if (totalTarjetas <= iniciales) return;

    const tarjetasExtra = tarjetas.slice(iniciales);
    tarjetasExtra.forEach(tarjeta => tarjeta.classList.add('oculto'));

    const boton = document.getElementById('botonVerCertificados');
    const spanTexto = boton.querySelector('span.traducible');

    if (!boton || !spanTexto) return;

    let expandido = false;
    boton.setAttribute('aria-expanded', 'false');

    // Textos para inglés (coinciden con traduccion.js)
    const textosIngles = {
        'boton-ver-certificados': 'View certificates',
        'boton-cerrar-certificados': 'Close certificates'
    };

    function actualizarTextoBoton(expandido) {
        const idioma = document.documentElement.lang; // 'es' o 'en'
        const nuevaClave = expandido ? 'boton-cerrar-certificados' : 'boton-ver-certificados';
        spanTexto.setAttribute('data-key', nuevaClave);
        
        if (idioma === 'en') {
            spanTexto.textContent = textosIngles[nuevaClave];
        } else {
            // Español
            spanTexto.textContent = expandido ? 'Cerrar certificados' : 'Ver certificados';
        }
    }

    boton.addEventListener('click', () => {
        expandido = !expandido;
        boton.setAttribute('aria-expanded', expandido.toString());

        if (expandido) {
            tarjetasExtra.forEach((tarjeta, index) => {
                tarjeta.classList.remove('oculto');
                // Aplicar animación con un pequeño delay para cada una
                setTimeout(() => {
                    tarjeta.classList.add('animar-entrada');
                }, index * 50);
            });
        } else {
            tarjetasExtra.forEach(tarjeta => {
                tarjeta.classList.add('oculto');
                tarjeta.classList.remove('animar-entrada');
            });
        }

        actualizarTextoBoton(expandido);
    });
}