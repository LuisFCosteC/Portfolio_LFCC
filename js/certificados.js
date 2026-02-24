// js/certificados.js - Funcionalidad para mostrar/ocultar certificados adicionales

export function configurarVerMasCertificados() {
    const grid = document.getElementById('gridCertificados');
    if (!grid) return;

    const tarjetas = Array.from(grid.querySelectorAll('.tarjeta-certificado'));
    const totalTarjetas = tarjetas.length;
    const iniciales = 8; // Número de certificados a mostrar inicialmente

    if (totalTarjetas <= iniciales) return;

    const tarjetasExtra = tarjetas.slice(iniciales);
    tarjetasExtra.forEach(tarjeta => tarjeta.classList.add('oculto'));

    const boton = document.getElementById('botonVerCertificados');
    if (!boton) return;

    // Buscamos el span que tiene el texto (puede ser el primer span o el que tiene data-key)
    const spanTexto = boton.querySelector('span[data-key]') || boton.querySelector('span');
    if (!spanTexto) return;

    let expandido = false;
    boton.setAttribute('aria-expanded', 'false');

    const textosIngles = {
        'boton-ver-certificados': 'View certificates',
        'boton-cerrar-certificados': 'Close certificates'
    };

    function actualizarTextoBoton(expandido) {
        const idioma = document.documentElement.lang; // 'es' o 'en'
        const clave = expandido ? 'boton-cerrar-certificados' : 'boton-ver-certificados';
        spanTexto.setAttribute('data-key', clave);
        
        if (idioma === 'en') {
            spanTexto.textContent = textosIngles[clave];
        } else {
            spanTexto.textContent = expandido ? 'Cerrar certificados' : 'Ver certificados';
        }
    }

    boton.addEventListener('click', () => {
        expandido = !expandido;
        boton.setAttribute('aria-expanded', expandido.toString());

        if (expandido) {
            tarjetasExtra.forEach((tarjeta, index) => {
                tarjeta.classList.remove('oculto');
                // Aplicar animación con retraso
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