// js/certificados.js - Funcionalidad para mostrar/ocultar certificados adicionales

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