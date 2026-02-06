// js/principal.js - Módulo principal
import { configurarNavegacion } from './navegacion.js';
import { configurarAnimaciones } from './animaciones.js';

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portafolio LFCC cargado');
    
    // Inicializar módulos
    configurarNavegacion();
    configurarAnimaciones();
    configurarMenuCV();
    
    // Configurar año actual en pie de página (si existe)
    const añoActual = new Date().getFullYear();
    const elementoAño = document.getElementById('año-actual');
    if (elementoAño) {
        elementoAño.textContent = añoActual;
    }
});

// Configurar menú desplegable de CV
function configurarMenuCV() {
    const botonDescargarCV = document.getElementById('botonDescargarCV');
    const menuCV = document.getElementById('menuCV');
    
    if (!botonDescargarCV || !menuCV) return;
    
    // Alternar menú al hacer clic en el botón
    botonDescargarCV.addEventListener('click', (evento) => {
        evento.stopPropagation();
        menuCV.classList.toggle('mostrar');
        botonDescargarCV.classList.toggle('menu-abierto');
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (evento) => {
        if (!botonDescargarCV.contains(evento.target) && !menuCV.contains(evento.target)) {
            menuCV.classList.remove('mostrar');
            botonDescargarCV.classList.remove('menu-abierto');
        }
    });
    
    // Cerrar menú al seleccionar una opción
    const opcionesMenu = document.querySelectorAll('.opcion-menu');
    opcionesMenu.forEach(opcion => {
        opcion.addEventListener('click', () => {
            setTimeout(() => {
                menuCV.classList.remove('mostrar');
                botonDescargarCV.classList.remove('menu-abierto');
            }, 100);
        });
    });
    
    // Cerrar menú al presionar Escape
    document.addEventListener('keydown', (evento) => {
        if (evento.key === 'Escape') {
            menuCV.classList.remove('mostrar');
            botonDescargarCV.classList.remove('menu-abierto');
        }
    });
}

// Función global para descargar CV según idioma
window.descargarCV = function(idioma = 'es') {
    // Rutas relativas a los archivos CV
    const rutasCV = {
        'es': 'assets/docs/Luis Coste Desarrollador Full Stack.pdf',
        'en': 'assets/docs/Luis Coste Full Stack Developer.pdf'
    };
    
    // Nombres de archivo para descarga
    const nombresCV = {
        'es': 'Luis_Coste_Desarrollador_Full_Stack.pdf',
        'en': 'Luis_Coste_Full_Stack_Developer.pdf'
    };
    
    // Textos para consola
    const textosIdioma = {
        'es': 'español',
        'en': 'inglés'
    };
    
    // Verificar que el idioma sea válido
    if (!rutasCV[idioma]) {
        console.error('Idioma no válido:', idioma);
        return;
    }
    
    // Ruta del archivo CV
    const rutaCV = rutasCV[idioma];
    const nombreArchivo = nombresCV[idioma];
    
    // Crear enlace temporal para descarga
    const enlace = document.createElement('a');
    enlace.href = rutaCV;
    enlace.download = nombreArchivo;
    enlace.target = '_blank'; // Abrir en nueva pestaña si falla la descarga
    
    // Añadir enlace al documento, hacer clic y removerlo
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
    
    // Registrar evento (simulado - en producción usaría analytics)
    console.log(`CV descargado en ${textosIdioma[idioma]}`);
};