// js/traduccion.js - Sistema de traducción y gestión de idiomas

import { inyectarTextos, textos } from './main.js';
import { reproducirAnimaciones } from './animaciones.js';

// ============================================
// TRADUCCIONES AL INGLÉS
// ============================================
const traduccionesEN = {
    // Navegación
    'nav-inicio': 'Home',
    'nav-acerca-de-mi': 'About Me',
    'nav-proyectos': 'Projects',
    'nav-certificados': 'Certificates',
    'nav-contactame': 'Contact Me',

    // Hero
    'saludo-hero': 'Hello, nice to meet you, I am',
    'nombre-hero': 'Luis Fernando Coste Contreras',
    'titulo-hero': 'Software Developer',

    // About Me
    'titulo-acerca-de-mi': 'About Me',
    'subtitulo-quien-soy': 'Who Am I?',
    'parrafo-sobre-mi': 'I am a Junior Full Stack Developer focused on creating efficient, scalable, and maintainable web applications. I have theoretical experience in both backend and frontend, which allows me to comprehensively understand projects and propose practical, well-thought-out solutions. I am passionate about continuous learning and quality software development.',

    // Tecnologías
    'titulo-tecnologias': 'Technologies I Master',
    'categoria-frontend': 'Frontend',
    'categoria-backend': 'Backend',
    'categoria-extras': 'Additional',

    // CV
    'boton-cv': 'Resume',
    'opcion-cv-espanol': 'Download CV in Spanish',
    'opcion-cv-ingles': 'Download CV in English',

    // Proyectos
    'titulo-proyectos': 'Projects',
    'titulo-proyecto1': 'Rick and Morty API with React',
    'desc-proyecto1': 'In this React project we made the consumption of The Rick and Morty API, where through the necessary urls we called the information of each character to be visualized on the page',
    'titulo-proyecto2': 'Form with React, MySQL, Node.js, and Bootstrap',
    'desc-proyecto2': 'This project is a full-stack web application that implements a CRUD to manage employees, allowing you to register, view, edit, and delete personal and work information, with an interface that updates in real time.',
    'titulo-proyecto3': 'Pokedex API Project',
    'desc-proyecto3': 'This project is a Pokédex application that allows users to look up information about Pokémon using their number in the Pokédex or their name. The application uses FastAPI for the backend and provides an interactive user interface using HTML, CSS and JavaScript.',
    'titulo-proyecto4': 'WebSocket Project: Client-Server',
    'desc-proyecto4': 'This project implements a WebSocket application that enables real-time communication between client and server, exchanging information such as request headers and responses to arithmetic operations.',
    'titulo-proyecto5': 'Sales Management System',
    'desc-proyecto5': 'Sales system developed with ASP.NET Core Web API and layered architecture (BLL, DAL, Model), with integrated database. It allows CRUD of products and sales, user and role management, and reports, applying dependency injection to ensure scalability and maintenance.',
    'boton-codigo': 'Code',
    'boton-demo': 'Live Demo',

    // Certificados
    'titulo-certificados': 'Certificates',
    'subtitulo-certificados': 'Professional certifications and achievements that demonstrate my experience and continuous learning.',
    'ver-certificado': 'View certificate →',
    'boton-ver-certificados': 'View certificates',
    'boton-cerrar-certificados': 'Close certificates',

    // Badges
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

    // Descripciones cortas
    'cert-desc-2': 'Basic JavaScript syntax',
    'cert-desc-3': 'Basic concepts of data analysis, data engineering, data science',
    'cert-desc-4': 'Computer programming knowledge, Python syntax and semantics',

    // Fechas
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

    // Contacto
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

    // Footer
    'footer-contacto': 'Contact me:',
    'copyright': 'All rights reserved.',
    'powered-by': 'Powered by Luis F. Coste C.',
};

let idiomaActual = 'es';

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
            if (span) span.textContent = 'Cambiar a inglés';
        }
    }
}

function cambiarIdioma(nuevoIdioma) {
    if (nuevoIdioma !== 'es' && nuevoIdioma !== 'en') return;
    idiomaActual = nuevoIdioma;
    document.documentElement.lang = nuevoIdioma;

    if (nuevoIdioma === 'en') {
        inyectarTextos(traduccionesEN);
    } else {
        inyectarTextos(textos); // textos es el objeto de español importado
    }

    actualizarEstadoBotones();
    localStorage.setItem('idioma-preferido', nuevoIdioma);
    reproducirAnimaciones();
}

export function configurarTraduccion() {
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

    const guardado = localStorage.getItem('idioma-preferido');
    if (guardado === 'en') {
        cambiarIdioma('en');
    } else {
        // Aseguramos español por defecto (aunque ya lo está)
        cambiarIdioma('es');
    }
}