// js/main.js - Módulo principal
import { configurarNavegacion } from './navegacion.js';
import { configurarAnimaciones } from './animaciones.js';
import { configurarCarrusel } from './carrusel.js';
import { configurarTraduccion } from './traduccion.js';
import { configurarVerMasCertificados } from './certificados.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portafolio LFCC cargado');
    
    configurarNavegacion();
    configurarAnimaciones();
    configurarMenuCV();
    configurarCarrusel();
    configurarVerMasCertificados();
    
    const sistemaTraduccion = configurarTraduccion();
    sistemaTraduccion.inicializar();
    
    // Actualizar año en el footer
    const añoActual = new Date().getFullYear();
    const elementoAño = document.getElementById('año-actual');
    if (elementoAño) {
        elementoAño.textContent = añoActual;
    }

    // ============================================
    // ENVÍO DEL FORMULARIO A WHATSAPP
    // ============================================
    const formulario = document.getElementById('formularioContacto');
    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita el envío tradicional

            // Obtener valores de los campos
            const nombre = document.getElementById('nombre')?.value.trim() || 'No especificado';
            const email = document.getElementById('email')?.value.trim() || 'No especificado';
            const telefono = document.getElementById('telefono')?.value.trim() || 'No especificado';
            const servicio = document.getElementById('servicio')?.value;
            const tiempo = document.getElementById('tiempo')?.value;
            const detalles = document.getElementById('detalles')?.value.trim() || 'Sin detalles';

            // Mapear valores de selects a texto legible
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

            // Construir mensaje
            const mensaje = `Hola Luis, te escriben desde tu portafolio:

*Nombre:* ${nombre}
*Email:* ${email}
*Teléfono:* ${telefono}
*Servicio de interés:* ${servicioTexto}
*Plazo estimado:* ${tiempoTexto}
*Detalles del proyecto:*
${detalles}

Quedo atento a tu respuesta.`;

            // Número de WhatsApp con código de país (Colombia 57)
            const numero = '573116463033';
            const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

            // Abrir WhatsApp en nueva pestaña
            window.open(url, '_blank');
        });
        console.log('Listener de formulario de contacto agregado');
    } else {
        console.warn('No se encontró el formulario de contacto');
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