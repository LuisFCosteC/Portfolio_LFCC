import { configurarNavegacion } from './navegacion.js';
import { configurarAnimaciones } from './animaciones.js';
import { configurarCarrusel } from './carrusel.js';
import { configurarTraduccion } from './traduccion.js';
import { configurarVerMasCertificados } from './certificados.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portafolio LFCC cargado');
    
    configurarNavegacion();
    configurarAnimaciones();
    configurarMenuCV('botonDescargarCV', 'menuCV');       // Menú de escritorio
    configurarMenuCV('botonDescargarCVMovil', 'menuCVMovil'); // Menú móvil
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

// Función reutilizable para configurar el menú desplegable de CV
function configurarMenuCV(botonId, menuId) {
    const boton = document.getElementById(botonId);
    const menu = document.getElementById(menuId);
    
    if (!boton || !menu) return;
    
    boton.addEventListener('click', (evento) => {
        evento.stopPropagation();
        menu.classList.toggle('mostrar');
        boton.classList.toggle('menu-abierto');
    });
    
    document.addEventListener('click', (evento) => {
        if (!boton.contains(evento.target) && !menu.contains(evento.target)) {
            menu.classList.remove('mostrar');
            boton.classList.remove('menu-abierto');
        }
    });
    
    const opcionesMenu = document.querySelectorAll(`#${menuId} .opcion-menu`);
    opcionesMenu.forEach(opcion => {
        opcion.addEventListener('click', () => {
            setTimeout(() => {
                menu.classList.remove('mostrar');
                boton.classList.remove('menu-abierto');
            }, 100);
        });
    });
    
    document.addEventListener('keydown', (evento) => {
        if (evento.key === 'Escape') {
            menu.classList.remove('mostrar');
            boton.classList.remove('menu-abierto');
        }
    });
}

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
    
    if (!rutasCV[idioma]) {
        console.error('Idioma no válido:', idioma);
        return;
    }
    
    const enlace = document.createElement('a');
    enlace.href = rutasCV[idioma];
    enlace.download = nombresCV[idioma];
    enlace.target = '_blank';
    
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
};