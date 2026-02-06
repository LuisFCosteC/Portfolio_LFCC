// js/principal.js - Módulo principal
import { configurarNavegacion } from './navegacion.js';
import { configurarAnimaciones } from './animaciones.js';

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portafolio LFCC cargado');
    
    // Inicializar módulos
    configurarNavegacion();
    configurarAnimaciones();
    
    // Configurar año actual en pie de página (si existe)
    const añoActual = new Date().getFullYear();
    const elementoAño = document.getElementById('año-actual');
    if (elementoAño) {
        elementoAño.textContent = añoActual;
    }
});

// Función global para descargar CV
window.descargarCV = function() {
    // Ruta relativa al archivo CV
    const rutaCVES = 'assets/docs/Luis Coste Desarrollador Full Stack.pdf';
    const rutaCVEN = 'assets/docs/Luis Coste Full Stack Developer.pdf';
    
    // Detectar idioma del navegador
    const idiomaUsuario = navigator.language || navigator.userLanguage;
    const esEspanol = idiomaUsuario.startsWith('es');
    
    // Usar el CV en español por defecto, inglés como alternativa
    const cvParaDescargar = esEspanol ? rutaCVES : rutaCVEN;
    
    // Crear enlace temporal para descarga
    const enlace = document.createElement('a');
    enlace.href = cvParaDescargar;
    enlace.download = `CV_Luis_Coste_${esEspanol ? 'ES' : 'EN'}.pdf`;
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
    
    // Registrar evento (simulado - en producción usaría analytics)
    console.log(`CV descargado en ${esEspanol ? 'español' : 'inglés'}`);
};