// js/main.js

import { configurarAnimaciones } from './animaciones.js';
import { configurarNavegacion } from './navegacion.js';
import { configurarCarrusel } from './carrusel.js';
import { configurarVerMasCertificados } from './certificados.js';
import { configurarTraduccion } from './traduccion.js';

// ============================================
// CONFIGURACIÓN DE IMÁGENES
// ============================================
const imagenes = {
    // Iconos generales
    'icono-traductor': { src: 'assets/images/Icono_Traductor.png', alt: 'Traducir', clase: 'icono-traduccion' },
    'linkedin': { src: 'assets/images/Icono_Redes_Linkedin.png', alt: 'LinkedIn', clase: 'icono-red' },
    'gmail': { src: 'assets/images/Icono_Redes_Gmail.png', alt: 'Gmail', clase: 'icono-red' },
    'github': { src: 'assets/images/Icono_Redes_GitHub.png', alt: 'GitHub', clase: 'icono-red' },
    'whatsapp': { src: 'assets/images/Icono_Redes_WhatsApp.png', alt: 'WhatsApp', clase: 'icono-red' },
    'linkedin-footer': { src: 'assets/images/Icono_Redes_Linkedin.png', alt: 'LinkedIn', clase: 'icono-red-footer' },
    'gmail-footer': { src: 'assets/images/Icono_Redes_Gmail.png', alt: 'Gmail', clase: 'icono-red-footer' },
    'github-footer': { src: 'assets/images/Icono_Redes_GitHub.png', alt: 'GitHub', clase: 'icono-red-footer' },
    'whatsapp-footer': { src: 'assets/images/Icono_Redes_WhatsApp.png', alt: 'WhatsApp', clase: 'icono-red-footer' },
    'discord-footer': { src: 'assets/images/Icono_Redes_Discord.png', alt: 'Discord', clase: 'icono-red-footer' },
    
    // Hero
    'hero-perfil': { src: 'assets/images/Imagen_1.png', alt: 'Luis Fernando Coste Contreras - Desarrollador Full Stack Junior', clase: 'foto-perfil' },
    
    // Tecnologías
    'html': { src: 'assets/images/Icono_Tecnología_HTML.png', alt: 'HTML', clase: 'icono-tecnologia' },
    'css': { src: 'assets/images/Icono_Tecnología_CSS.png', alt: 'CSS', clase: 'icono-tecnologia' },
    'javascript': { src: 'assets/images/Icono_Tecnología_Javascript.png', alt: 'JavaScript', clase: 'icono-tecnologia' },
    'angular': { src: 'assets/images/Icono_Tecnología_Angular.png', alt: 'Angular', clase: 'icono-tecnologia' },
    'typescript': { src: 'assets/images/Icono_Tecnología_Typescript.png', alt: 'TypeScript', clase: 'icono-tecnologia' },
    'bootstrap': { src: 'assets/images/Icono_Tecnología_Bootstrap.png', alt: 'Bootstrap', clase: 'icono-tecnologia' },
    'python': { src: 'assets/images/Icono_Tecnología_Python.png', alt: 'Python', clase: 'icono-tecnologia' },
    'java': { src: 'assets/images/Icono_Tecnología_Java.png', alt: 'Java', clase: 'icono-tecnologia' },
    'csharp': { src: 'assets/images/Icono_Tecnología_Csharp.png', alt: 'C#', clase: 'icono-tecnologia' },
    'nodejs': { src: 'assets/images/Icono_Tecnología_NodeJS.png', alt: 'Node JS', clase: 'icono-tecnologia' },
    'fastapi': { src: 'assets/images/Icono_Tecnología_FastAPI.png', alt: 'FastAPI', clase: 'icono-tecnologia' },
    'dotnetcore': { src: 'assets/images/Icono_Tecnología_.NETCore.png', alt: '.NET Core', clase: 'icono-tecnologia' },
    'dotnet': { src: 'assets/images/Icono_Tecnología_.NET.png', alt: '.NET', clase: 'icono-tecnologia' },
    'mysql': { src: 'assets/images/Icono_Tecnología_MySQL.png', alt: 'MySQL', clase: 'icono-tecnologia' },
    'sqlserver': { src: 'assets/images/Icono_Tecnología_SqlServer.png', alt: 'SQL Server', clase: 'icono-tecnologia' },
    'figma': { src: 'assets/images/Icono_Tecnología_Figma.png', alt: 'Figma', clase: 'icono-tecnologia' },
    'gitbash': { src: 'assets/images/Icono_Tecnología_GitBash.png', alt: 'Git Bash', clase: 'icono-tecnologia' },
    'github-icon': { src: 'assets/images/Icono_Tecnología_GitHub.png', alt: 'GitHub', clase: 'icono-tecnologia' },
    'postman': { src: 'assets/images/Icono_Tecnología_PostMan.png', alt: 'Postman', clase: 'icono-tecnologia' },
    
    // Proyectos (imágenes de vista previa)
    'proyecto-sistema-ventas': { src: 'assets/images/proyecto_Sistema_de_gestión_de_Ventas.png', alt: 'Proyecto Sistema de Ventas', clase: '' },
    'proyecto-websocket': { src: 'assets/images/proyecto_WebSocket.png', alt: 'Proyecto WebSocket: Comunicación cliente-servidor', clase: '' },
    'proyecto-pokedex': { src: 'assets/images/proyecto_Pokedex_API.png', alt: 'Proyecto Pokedex API', clase: '' },
    'proyecto-form-react': { src: 'assets/images/proyecto_Formulario_con_React.png', alt: 'Formulario con React, MySQL, Node.js y Bootstrap', clase: '' },
    'proyecto-rick-morty': { src: 'assets/images/proyecto_Rick_And_Morty.png', alt: 'API de Rick y Morty con React', clase: '' },
    
    // Carrusel
    'carrusel-1': { src: 'assets/images/Imagen_Carrusel_1.jpeg', alt: 'Luis Coste trabajando en proyecto', clase: 'imagen-carrusel' },
    'carrusel-2': { src: 'assets/images/Imagen_Carrusel_2.jpeg', alt: 'Luis Coste en equipo de desarrollo', clase: 'imagen-carrusel' },
    'carrusel-3': { src: 'assets/images/Imagen_Carrusel_3.jpeg', alt: 'Luis Coste presentando proyecto', clase: 'imagen-carrusel' },
    'carrusel-4': { src: 'assets/images/Imagen_Carrusel_4.jpeg', alt: 'Luis Coste en conferencia tecnológica', clase: 'imagen-carrusel' },
    
    // Iconos adicionales
    'calendario': { src: 'assets/images/Calendario.png', alt: '', clase: 'icono-calendario' },
    'web-icon': { src: 'assets/images/Pagina_Web.png', alt: 'Sitio web', clase: '' },
    'flecha-abajo': { src: 'assets/images/Flecha_hacia_abajo.png', alt: '', clase: '' },
    'flecha-arriba': { src: 'assets/images/Flecha_hacia_arriba.png', alt: '', clase: '' },
};

// ============================================
// TEXTOS EN ESPAÑOL (ÚNICA FUENTE PARA ESPAÑOL)
// ============================================
export const textos = {
    // Navegación
    'nav-inicio': 'Inicio',
    'nav-acerca-de-mi': 'Acerca de mí',
    'nav-proyectos': 'Proyectos',
    'nav-certificados': 'Certificados',
    'nav-contactame': 'Contáctame',

    // Hero
    'saludo-hero': 'Hola, un gusto conocerte, soy',
    'nombre-hero': 'Luis Fernando Coste Contreras',
    'titulo-hero': 'Desarrollador de Software',

    // About Me
    'titulo-acerca-de-mi': 'Acerca de mí',
    'subtitulo-quien-soy': '¿Quien soy?',
    'parrafo-sobre-mi': 'Soy un Desarrollador de Software enfocado en crear software eficiente, escalable y fácil de mantener. Tengo experiencia teorica tanto en backend como en frontend, lo que me permite entender los proyectos de forma integral y proponer soluciones prácticas y bien pensadas. Me apasiona el aprendizaje continuo y el desarrollo de software de calidad.',

    // Tecnologías
    'titulo-tecnologias': 'Tecnologías que domino',
    'categoria-frontend': 'Frontend',
    'categoria-backend': 'Backend',
    'categoria-extras': 'Extras',

    // CV
    'boton-cv': 'CV',
    'opcion-cv-espanol': 'Descargar CV en Español',
    'opcion-cv-ingles': 'Descargar CV en Inglés',

    // Proyectos
    'titulo-proyectos': 'Proyectos',
    'titulo-proyecto1': 'API de Rick y Morty con React',
    'desc-proyecto1': 'En este proyecto de React, realice uso de la API de Rick y Morty, donde, a través de las URL necesarias, llamamos a la información de cada personaje para visualizarla en la página.',
    'titulo-proyecto2': 'Formulario con React, MySQL, Node.js y Bootstrap',
    'desc-proyecto2': 'Este proyecto es una aplicación web full-stack que implementa un CRUD para gestionar empleados, permitiendo registrar, visualizar, editar y eliminar información personal y laboral, con una interfaz que se actualiza en tiempo real.',
    'titulo-proyecto3': 'Proyecto Pokedex API',
    'desc-proyecto3': 'Este proyecto es una aplicación Pokédex que permite a los usuarios buscar información sobre Pokémon utilizando su número en la Pokédex o su nombre. La aplicación utiliza FastAPI para el backend y proporciona una interfaz de usuario interactiva utilizando HTML, CSS y JavaScript.',
    'titulo-proyecto4': 'Proyecto WebSocket: Cliente-Servidor',
    'desc-proyecto4': 'Este proyecto implementa una aplicación WebSocket que permite comunicación en tiempo real entre cliente y servidor, intercambiando información como encabezados de solicitud y respuestas a operaciones aritméticas.',
    'titulo-proyecto5': 'Sistema de gestión de ventas',
    'desc-proyecto5': 'Sistema de ventas desarrollado con ASP.NET Core Web API y arquitectura en capas (BLL, DAL, Model), con base de datos integrada. Permite CRUD de productos y ventas, gestión de usuarios y roles, e informes, aplicando inyección de dependencias para garantizar escalabilidad y mantenimiento.',
    'boton-codigo': 'Código',
    'boton-demo': 'Demo',

    // Certificados
    'titulo-certificados': 'Certificados',
    'subtitulo-certificados': 'Certificaciones profesionales y logros que demuestran mi experiencia y aprendizaje continuo.',
    'ver-certificado': 'Ver certificado →',
    'boton-ver-certificados': 'Ver certificados',
    'boton-cerrar-certificados': 'Cerrar certificados',

    // Badges
    'badge-meta': 'Meta',
    'badge-cisco': 'Cisco Networking Academy',
    'badge-udemy': 'Udemy',
    'badge-linkedin': 'LinkedIn Learning',
    'badge-microsoft-linkedin': 'Microsoft y LinkedIn',
    'badge-compensar': 'compensar y EDU',

    // Títulos de certificados
    'cert-titulo-1': 'Introducción al desarrollo de apps móviles para Android',
    'cert-titulo-2': 'Fundamentos de JavaScript 1',
    'cert-titulo-3': 'Introducción a la ciencia de datos',
    'cert-titulo-4': 'Fundamentos de Python 1',
    'cert-titulo-5': 'C# TOTAL - Programador Experto en 28 días',
    'cert-titulo-6': 'Fundamentos esenciales de la programación',
    'cert-titulo-7': 'Fundamentos profesionales del desarrollo de software',
    'cert-titulo-8': 'Fundamentos profesionales del análisis de datos',
    'cert-titulo-9': 'Aprende análisis de datos',
    'cert-titulo-10': 'Aprende data science: Conceptos básicos',
    'cert-titulo-11': 'Aprende data science: Cuenta historias con los datos',
    'cert-titulo-12': 'Introducción a las habilidades profesionales en análisis de datos',
    'cert-titulo-13': 'Aprende SQL con MySQL 8 (2023)',
    'cert-titulo-14': 'Excel Intermedio',

    // Descripciones cortas de certificados
    'cert-desc-2': 'Sintaxis del JavaScript básico',
    'cert-desc-3': 'Conceptos básicos de análisis de datos, ingeniería de datos, ciencia de datos',
    'cert-desc-4': 'Conocimientos de programación informática, sintaxis y semántica del lenguaje Python',

    // Fechas
    'fecha-cert-1': '15 de mayo de 2025',
    'fecha-cert-2': '31 de enero de 2024',
    'fecha-cert-3': '25 de octubre de 2023',
    'fecha-cert-4': '02 de octubre de 2023',
    'fecha-cert-5': '17 de junio de 2023',
    'fecha-cert-6': '14 de junio de 2023',
    'fecha-cert-7': '11 de junio de 2023',
    'fecha-cert-8': '11 de junio de 2023',
    'fecha-cert-9': '10 de junio de 2023',
    'fecha-cert-10': '10 de junio de 2023',
    'fecha-cert-11': '10 de junio de 2023',
    'fecha-cert-12': '09 de junio de 2023',
    'fecha-cert-13': '03 de junio de 2023',
    'fecha-cert-14': '03 de junio de 2023',

    // Contacto
    'titulo-contacto': 'Contáctame',
    'subtitulo-contacto': 'Cultivar conexiones: ponte en contacto conmigo y conectemos',
    'label-nombre': 'Nombre',
    'label-email': 'Email',
    'label-telefono': 'Teléfono',
    'label-servicio': 'Servicio de interés',
    'opcion-web': 'Desarrollo Web',
    'opcion-movil': 'Aplicación Móvil',
    'opcion-otro': 'Otro',
    'label-tiempo': 'Plazo estimado',
    'tiempo-urgente': 'Urgente (1-2 semanas)',
    'tiempo-normal': 'Normal (3-4 semanas)',
    'tiempo-largo': 'Largo plazo (más de 1 mes)',
    'label-detalles': 'Detalles del proyecto...',
    'placeholder-detalles': 'Cuéntame sobre tu proyecto...',
    'boton-enviar': 'Enviar mensaje',

    // Footer
    'footer-contacto': 'Contáctame:',
    'copyright': 'Todos los derechos reservados.',
    'powered-by': 'Desarrollado por Luis F. Coste C.',
};

// ============================================
// FUNCIÓN DE INYECCIÓN DE TEXTOS
// Recibe un objeto de textos (por defecto el español)
// ============================================
export function inyectarTextos(textosIdioma = textos) {
    // Elementos con data-key
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (textosIdioma[key]) {
            el.textContent = textosIdioma[key];
        }
    });

    // Placeholders
    document.querySelectorAll('[data-placeholder-key]').forEach(el => {
        const key = el.dataset.placeholderKey;
        if (textosIdioma[key]) {
            el.placeholder = textosIdioma[key];
        }
    });

    // Actualizar título y meta descripción según el idioma (se detecta por el objeto)
    const tituloPagina = document.querySelector('title');
    const metaDescripcion = document.querySelector('meta[name="description"]');
    
    // Determinamos si es inglés comprobando alguna clave representativa
    const esIngles = textosIdioma['saludo-hero'] === 'Hello, nice to meet you, I am';
    
    if (tituloPagina) {
        tituloPagina.textContent = esIngles 
            ? 'Luis F. Coste C. | Software Developer' 
            : 'Luis F. Coste C. | Desarrollador de Software';
    }
    if (metaDescripcion) {
        metaDescripcion.setAttribute('content', esIngles
            ? 'Professional portfolio of Luis Fernando Coste Contreras, Junior Full Stack Developer with 5+ years of experience'
            : 'Portafolio profesional de Luis Fernando Coste Contreras, Desarrollador Full Stack Junior con 5+ años de experiencia');
    }
}

// ============================================
// FUNCIONES DE GENERACIÓN DE CONTENIDO DINÁMICO
// ============================================
function cargarImagenes() {
    document.querySelectorAll('[data-img]').forEach(contenedor => {
        const key = contenedor.dataset.img;
        const imgData = imagenes[key];
        if (!imgData) return;

        const img = document.createElement('img');
        img.src = imgData.src;
        img.alt = imgData.alt || '';
        if (imgData.clase) img.className = imgData.clase;
        contenedor.innerHTML = '';
        contenedor.appendChild(img);
    });
}

const proyectos = [
    {
        id: 5,
        imgKey: 'proyecto-sistema-ventas',
        tituloKey: 'titulo-proyecto5',
        descKey: 'desc-proyecto5',
        tecnologias: ['angular', 'dotnetcore', 'sqlserver'],
        github: 'https://github.com/LuisFCosteC/Sales_Management_System',
        demo: null
    },
    {
        id: 4,
        imgKey: 'proyecto-websocket',
        tituloKey: 'titulo-proyecto4',
        descKey: 'desc-proyecto4',
        tecnologias: ['html', 'css', 'javascript', 'nodejs'],
        github: 'https://github.com/LuisFCosteC/LuisFCosteC-WebSocket_Project_Client-Server_Communication',
        demo: null
    },
    {
        id: 3,
        imgKey: 'proyecto-pokedex',
        tituloKey: 'titulo-proyecto3',
        descKey: 'desc-proyecto3',
        tecnologias: ['html', 'css', 'javascript', 'fastapi'],
        github: 'https://github.com/LuisFCosteC/Pokedex-API-Project',
        demo: null
    },
    {
        id: 2,
        imgKey: 'proyecto-form-react',
        tituloKey: 'titulo-proyecto2',
        descKey: 'desc-proyecto2',
        tecnologias: ['react', 'bootstrap', 'nodejs', 'mysql'],
        github: 'https://github.com/LuisFCosteC/Form-with-React-MySql-NodeJs-Bootstrap',
        demo: null
    },
    {
        id: 1,
        imgKey: 'proyecto-rick-morty',
        tituloKey: 'titulo-proyecto1',
        descKey: 'desc-proyecto1',
        tecnologias: ['react', 'html', 'javascript'],
        github: 'https://github.com/LuisFCosteC/Rick-and-Morty-Api-with-React/tree/main',
        demo: null
    }
];

function generarProyectos() {
    const grid = document.getElementById('grid-proyectos');
    if (!grid) return;

    proyectos.forEach(proj => {
        const article = document.createElement('article');
        article.className = 'tarjeta-proyecto';

        const divImg = document.createElement('div');
        divImg.className = 'imagen-proyecto';
        if (proj.imgKey) {
            const img = document.createElement('img');
            img.src = imagenes[proj.imgKey].src;
            img.alt = imagenes[proj.imgKey].alt;
            img.loading = 'lazy';
            divImg.appendChild(img);
        }
        article.appendChild(divImg);

        const h3 = document.createElement('h3');
        h3.className = 'titulo-proyecto';
        h3.setAttribute('data-key', proj.tituloKey);
        article.appendChild(h3);

        const p = document.createElement('p');
        p.className = 'descripcion-proyecto';
        p.setAttribute('data-key', proj.descKey);
        article.appendChild(p);

        const divTec = document.createElement('div');
        divTec.className = 'tecnologias-proyecto';
        proj.tecnologias.forEach(tecKey => {
            const img = document.createElement('img');
            const tecData = imagenes[tecKey];
            if (tecData) {
                img.src = tecData.src;
                img.alt = tecData.alt;
                img.className = 'icono-tecnologia';
                img.loading = 'lazy';
                divTec.appendChild(img);
            }
        });
        article.appendChild(divTec);

        const divBotones = document.createElement('div');
        divBotones.className = 'botones-proyecto';

        // Botón GitHub
        const aGit = document.createElement('a');
        aGit.href = proj.github;
        aGit.target = '_blank';
        aGit.rel = 'noopener noreferrer';
        aGit.className = 'boton-proyecto github';
        aGit.setAttribute('aria-label', 'Ver código en GitHub');
        const imgGit = document.createElement('img');
        imgGit.src = imagenes['github-icon'].src;
        imgGit.alt = 'GitHub';
        imgGit.loading = 'lazy';
        aGit.appendChild(imgGit);
        const spanGit = document.createElement('span');
        spanGit.setAttribute('data-key', 'boton-codigo');
        aGit.appendChild(spanGit);
        divBotones.appendChild(aGit);

        // Botón Demo
        const aDemo = document.createElement('a');
        aDemo.rel = 'noopener noreferrer';
        aDemo.className = 'boton-proyecto web';
        aDemo.setAttribute('aria-label', 'Ver proyecto en vivo');

        if (proj.demo) {
            aDemo.href = proj.demo;
            aDemo.target = '_blank';
        } else {
            aDemo.style.pointerEvents = 'none';
            aDemo.style.opacity = '0.5';
            aDemo.removeAttribute('href');
        }

        const imgDemo = document.createElement('img');
        imgDemo.src = imagenes['web-icon'].src;
        imgDemo.alt = 'Sitio web';
        imgDemo.loading = 'lazy';
        aDemo.appendChild(imgDemo);

        const spanDemo = document.createElement('span');
        spanDemo.setAttribute('data-key', 'boton-demo');
        aDemo.appendChild(spanDemo);

        divBotones.appendChild(aDemo);
        article.appendChild(divBotones);
        grid.appendChild(article);
    });
}

const tecnologias = {
    frontend: ['html', 'css', 'javascript', 'angular', 'typescript', 'bootstrap'],
    backend: ['python', 'java', 'csharp', 'nodejs', 'fastapi', 'dotnetcore', 'dotnet', 'mysql', 'sqlserver'],
    extras: ['figma', 'gitbash', 'github-icon', 'postman']
};

function generarTecnologias() {
    for (const [categoria, items] of Object.entries(tecnologias)) {
        const contenedor = document.querySelector(`.contenedor-tecnologias[data-categoria="${categoria}"]`);
        if (!contenedor) continue;

        items.forEach(tecKey => {
            const tecData = imagenes[tecKey];
            if (!tecData) return;

            const div = document.createElement('div');
            div.className = 'tecnologia-item';
            if (tecKey === 'dotnetcore' || tecKey === 'dotnet' || tecKey === 'sqlserver') {
                div.classList.add('tecnologia-item--largo');
            }

            const img = document.createElement('img');
            img.src = tecData.src;
            img.alt = tecData.alt;
            img.className = tecData.clase;
            img.loading = 'lazy';
            div.appendChild(img);

            const span = document.createElement('span');
            span.className = 'nombre-tecnologia';
            span.textContent = tecData.alt;
            div.appendChild(span);

            contenedor.appendChild(div);
        });
    }
}

function generarCarrusel() {
    const slidesContainer = document.querySelector('.carrusel-slides');
    const indicadoresContainer = document.querySelector('.carrusel-indicadores');
    if (!slidesContainer || !indicadoresContainer) return;

    const imagenesCarrusel = ['carrusel-1', 'carrusel-2', 'carrusel-3', 'carrusel-4'];

    imagenesCarrusel.forEach((key, index) => {
        const imgData = imagenes[key];
        const slideDiv = document.createElement('div');
        slideDiv.className = 'carrusel-slide';
        const img = document.createElement('img');
        img.src = imgData.src;
        img.alt = imgData.alt;
        img.className = imgData.clase;
        img.loading = 'lazy';
        slideDiv.appendChild(img);
        slidesContainer.appendChild(slideDiv);

        const indicador = document.createElement('button');
        indicador.className = `indicador ${index === 0 ? 'activo' : ''}`;
        indicador.setAttribute('aria-label', `Ir a imagen ${index + 1}`);
        indicadoresContainer.appendChild(indicador);
    });
}

const certificados = [
    { plataformaKey: 'badge-meta', tituloKey: 'cert-titulo-1', fechaKey: 'fecha-cert-1', url: 'https://coursera.org/share/0ecfa4c415c7b22a3a6ef16c2ff10987', desc: null },
    { plataformaKey: 'badge-cisco', tituloKey: 'cert-titulo-2', fechaKey: 'fecha-cert-2', url: 'https://www.credly.com/badges/c7cc4845-32fa-43da-a558-ab7425f429a1/public_url', descKey: 'cert-desc-2' },
    { plataformaKey: 'badge-cisco', tituloKey: 'cert-titulo-3', fechaKey: 'fecha-cert-3', url: 'https://www.credly.com/badges/f52ebc92-b2f4-4502-91d4-0c4c270e9868/public_url', descKey: 'cert-desc-3' },
    { plataformaKey: 'badge-cisco', tituloKey: 'cert-titulo-4', fechaKey: 'fecha-cert-4', url: 'https://www.credly.com/badges/e16fc1f1-07a8-492e-824b-a716a05b7506/public_url', descKey: 'cert-desc-4' },
    { plataformaKey: 'badge-udemy', tituloKey: 'cert-titulo-5', fechaKey: 'fecha-cert-5', url: 'https://www.udemy.com/certificate/UC-1c303618-7f7e-4b8a-bbd8-67adebf3f653/', desc: null },
    { plataformaKey: 'badge-linkedin', tituloKey: 'cert-titulo-6', fechaKey: 'fecha-cert-6', url: 'https://www.linkedin.com/learning/certificates/9a0be56003c2f431a17b128ae833e4fbda32b23b2eb954ed4de3bd4492e8fa5e', desc: null },
    { plataformaKey: 'badge-microsoft-linkedin', tituloKey: 'cert-titulo-7', fechaKey: 'fecha-cert-7', url: 'https://www.linkedin.com/learning/certificates/2c010a994a0f9e236f9c70ce37e31324933bb42f7e874f42f9d602451abe6b23', desc: null },
    { plataformaKey: 'badge-microsoft-linkedin', tituloKey: 'cert-titulo-8', fechaKey: 'fecha-cert-8', url: 'https://www.linkedin.com/learning/certificates/9806fbfe500721a7a81d42c927e18ab977f1a470ddf94997642f15afc29b70a9', desc: null },
    { plataformaKey: 'badge-linkedin', tituloKey: 'cert-titulo-9', fechaKey: 'fecha-cert-9', url: 'https://www.linkedin.com/learning/certificates/73018c00c9f51d274c36e5cb49703ff02b1dd0cc787d6587c1a776719780c059', desc: null },
    { plataformaKey: 'badge-linkedin', tituloKey: 'cert-titulo-10', fechaKey: 'fecha-cert-10', url: 'https://www.linkedin.com/learning/certificates/9cae73169f4170d2714bc9e4a0a84b40dc3a8e46dab24a4d70e66fc3e6509775', desc: null },
    { plataformaKey: 'badge-linkedin', tituloKey: 'cert-titulo-11', fechaKey: 'fecha-cert-11', url: 'https://www.linkedin.com/learning/certificates/fc69c9a37d0cfa199314677ab8e194b0599eb0dcb816ca27f5625d6a143dcf1f', desc: null },
    { plataformaKey: 'badge-linkedin', tituloKey: 'cert-titulo-12', fechaKey: 'fecha-cert-12', url: 'https://www.linkedin.com/learning/certificates/bf4c916cd2804b1b312ad7ce42b220913c284317bf8e87fb43ad53542024adb7', desc: null },
    { plataformaKey: 'badge-udemy', tituloKey: 'cert-titulo-13', fechaKey: 'fecha-cert-13', url: 'https://www.udemy.com/certificate/UC-d3c2f565-ec45-446e-9c1f-a8e86e80ca30/', desc: null },
    { plataformaKey: 'badge-compensar', tituloKey: 'cert-titulo-14', fechaKey: 'fecha-cert-14', url: 'assets/docs/Certificado. Excel intermedio.pdf', desc: null }
];

function generarCertificados() {
    const grid = document.getElementById('gridCertificados');
    if (!grid) return;

    certificados.forEach(cert => {
        const article = document.createElement('article');
        article.className = 'tarjeta-certificado';

        const badge = document.createElement('div');
        badge.className = 'badge-plataforma';
        badge.setAttribute('data-key', cert.plataformaKey);
        article.appendChild(badge);

        const h3 = document.createElement('h3');
        h3.className = 'titulo-certificado';
        h3.setAttribute('data-key', cert.tituloKey);
        article.appendChild(h3);

        if (cert.descKey) {
            const pDesc = document.createElement('p');
            pDesc.className = 'descripcion-certificado';
            pDesc.setAttribute('data-key', cert.descKey);
            article.appendChild(pDesc);
        }

        const divAccion = document.createElement('div');
        divAccion.className = 'accion-certificado';

        const divFecha = document.createElement('div');
        divFecha.className = 'fecha-certificado';
        const imgCal = document.createElement('img');
        imgCal.src = imagenes['calendario'].src;
        imgCal.alt = '';
        imgCal.className = 'icono-calendario';
        imgCal.loading = 'lazy';
        divFecha.appendChild(imgCal);
        const time = document.createElement('time');
        time.setAttribute('data-key', cert.fechaKey);
        divFecha.appendChild(time);
        divAccion.appendChild(divFecha);

        const a = document.createElement('a');
        a.href = cert.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = 'enlace-certificado';
        a.setAttribute('data-key', 'ver-certificado');
        a.innerHTML = '<span>Ver certificado →</span>';
        divAccion.appendChild(a);

        article.appendChild(divAccion);
        grid.appendChild(article);
    });
}

// ============================================
// CONFIGURACIÓN DE MENÚ CV (función auxiliar)
// ============================================
function configurarMenuCV(botonId, menuId) {
    const boton = document.getElementById(botonId);
    const menu = document.getElementById(menuId);
    if (!boton || !menu) return;

    boton.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('mostrar');
        boton.classList.toggle('menu-abierto');
    });

    document.addEventListener('click', (e) => {
        if (!boton.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove('mostrar');
            boton.classList.remove('menu-abierto');
        }
    });

    document.querySelectorAll(`#${menuId} .opcion-menu`).forEach(op => {
        op.addEventListener('click', () => {
            setTimeout(() => {
                menu.classList.remove('mostrar');
                boton.classList.remove('menu-abierto');
            }, 100);
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            menu.classList.remove('mostrar');
            boton.classList.remove('menu-abierto');
        }
    });
}

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portafolio LFCC cargado');

    // Generar estructuras dinámicas
    generarCarrusel();
    generarTecnologias();
    generarProyectos();
    generarCertificados();

    // Cargar imágenes
    cargarImagenes();

    // Inyectar textos en español (por defecto)
    inyectarTextos(textos);

    // Configurar funcionalidades (navegación, animaciones, etc.)
    configurarNavegacion();
    configurarAnimaciones();
    configurarMenuCV('botonDescargarCV', 'menuCV');
    configurarMenuCV('botonDescargarCVMovil', 'menuCVMovil');
    configurarCarrusel();
    configurarVerMasCertificados();

    // Configurar sistema de traducción (esto añadirá los event listeners a los botones)
    configurarTraduccion();

    // Actualizar año en el footer
    const añoActual = new Date().getFullYear();
    const elementoAño = document.getElementById('año-actual');
    if (elementoAño) elementoAño.textContent = añoActual;

    // Envío del formulario a WhatsApp
    const formulario = document.getElementById('formularioContacto');
    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();

            const nombre = document.getElementById('nombre')?.value.trim() || 'No especificado';
            const email = document.getElementById('email')?.value.trim() || 'No especificado';
            const telefono = document.getElementById('telefono')?.value.trim() || 'No especificado';
            const servicio = document.getElementById('servicio')?.value;
            const tiempo = document.getElementById('tiempo')?.value;
            const detalles = document.getElementById('detalles')?.value.trim() || 'Sin detalles';

            const servicioTexto = {
                'desarrollo-web': 'Desarrollo Web',
                'aplicacion-movil': 'Aplicación Móvil',
                'otro': 'Otro'
            }[servicio] || servicio;

            const tiempoTexto = {
                'urgente': 'Urgente (1-2 semanas)',
                'normal': 'Normal (3-4 semanas)',
                'largo': 'Largo plazo (más de 1 mes)'
            }[tiempo] || tiempo;

            const mensaje = `Hola Luis, te escriben desde tu portafolio:

*Nombre:* ${nombre}
*Email:* ${email}
*Teléfono:* ${telefono}
*Servicio de interés:* ${servicioTexto}
*Plazo estimado:* ${tiempoTexto}
*Detalles del proyecto:*
${detalles}

Quedo atento a tu respuesta.`;

            const numero = '573116463033';
            const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
            window.open(url, '_blank');
        });
    }
});

// Función global para descargar CV según idioma
window.descargarCV = function(idioma = 'es') {
    const rutasCV = {
        'es': 'assets/docs/Luis Coste Desarrollador de Software.pdf',
        'en': 'assets/docs/Luis Coste Software Developer.pdf'
    };
    const nombresCV = {
        'es': 'Luis_Coste_Desarrollador_de_Software.pdf',
        'en': 'Luis_Coste_Software_Developer.pdf'
    };
    if (!rutasCV[idioma]) return;
    const enlace = document.createElement('a');
    enlace.href = rutasCV[idioma];
    enlace.download = nombresCV[idioma];
    enlace.target = '_blank';
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
};