// js/main.js - Módulo principal
import { configurarNavegacion } from './navegacion.js';
import { configurarAnimaciones } from './animaciones.js';
import { configurarCarrusel } from './carrusel.js';
import { configurarTraduccion } from './traduccion.js';
import { configurarVerMasCertificados } from './certificados.js'; // nuevo

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portafolio LFCC cargado');
    
    configurarNavegacion();
    configurarAnimaciones();
    configurarMenuCV();
    configurarCarrusel();
    configurarVerMasCertificados(); // función importada
    
    const sistemaTraduccion = configurarTraduccion();
    sistemaTraduccion.inicializar();
    
    // Actualizar año en el footer
    const añoActual = new Date().getFullYear();
    const elementoAño = document.getElementById('año-actual');
    if (elementoAño) {
        elementoAño.textContent = añoActual;
    }
});

// Configurar menú desplegable de CV principal
function configurarMenuCV() {
    const botonDescargarCV = document.getElementById('botonDescargarCV');
    const menuCV = document.getElementById('menuCV');
    
    if (!botonDescargarCV || !menuCV) return;
    
    botonDescargarCV.addEventListener('click', (evento) => {
        evento.stopPropagation();
        menuCV.classList.toggle('mostrar');
        botonDescargarCV.classList.toggle('menu-abierto');
    });
    
    document.addEventListener('click', (evento) => {
        if (!botonDescargarCV.contains(evento.target) && !menuCV.contains(evento.target)) {
            menuCV.classList.remove('mostrar');
            botonDescargarCV.classList.remove('menu-abierto');
        }
    });
    
    const opcionesMenu = document.querySelectorAll('.opcion-menu');
    opcionesMenu.forEach(opcion => {
        opcion.addEventListener('click', () => {
            setTimeout(() => {
                menuCV.classList.remove('mostrar');
                botonDescargarCV.classList.remove('menu-abierto');
            }, 100);
        });
    });
    
    document.addEventListener('keydown', (evento) => {
        if (evento.key === 'Escape') {
            menuCV.classList.remove('mostrar');
            botonDescargarCV.classList.remove('menu-abierto');
        }
    });
}

// Función global para descargar CV según idioma
window.descargarCV = function(idioma = 'es') {
    const rutasCV = {
        'es': 'assets/docs/Luis Coste Desarrollador Full Stack.pdf',
        'en': 'assets/docs/Luis Coste Full Stack Developer.pdf'
    };
    
    const nombresCV = {
        'es': 'Luis_Coste_Desarrollador_Full_Stack.pdf',
        'en': 'Luis_Coste_Full_Stack_Developer.pdf'
    };
    
    const textosIdioma = {
        'es': 'español',
        'en': 'inglés'
    };
    
    if (!rutasCV[idioma]) {
        console.error('Idioma no válido:', idioma);
        return;
    }
    
    const rutaCV = rutasCV[idioma];
    const nombreArchivo = nombresCV[idioma];
    
    const enlace = document.createElement('a');
    enlace.href = rutaCV;
    enlace.download = nombreArchivo;
    enlace.target = '_blank';
    
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
    
    console.log(`CV descargado en ${textosIdioma[idioma]}`);
};