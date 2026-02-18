import { reproducirAnimaciones } from './animaciones.js';

export function configurarVerMasCertificados() {
    const grid = document.getElementById('gridCertificados');
    if (!grid) return;

    const tarjetas = Array.from(grid.querySelectorAll('.tarjeta-certificado'));
    const totalTarjetas = tarjetas.length;
    const iniciales = 8;

    // Si hay menos o igual a 8 tarjetas, no hacemos nada
    if (totalTarjetas <= iniciales) return;

    // Identificamos las tarjetas extra (índice >= iniciales)
    const tarjetasExtra = tarjetas.slice(iniciales);

    // Inicialmente ocultamos las extras
    tarjetasExtra.forEach(tarjeta => tarjeta.classList.add('oculto'));

    const boton = document.getElementById('botonVerCertificados');
    const iconoFlecha = document.getElementById('iconoFlechaCertificados');

    if (!boton || !iconoFlecha) return;

    let expandido = false;
    boton.setAttribute('aria-expanded', 'false');

    boton.addEventListener('click', () => {
        expandido = !expandido;
        boton.setAttribute('aria-expanded', expandido.toString());

        if (expandido) {
            // Mostrar tarjetas extra con animación
            tarjetasExtra.forEach((tarjeta, index) => {
                tarjeta.classList.remove('oculto');
                // Aplicar animación con un pequeño delay para cada una
                setTimeout(() => {
                    tarjeta.classList.add('animar-entrada');
                }, index * 50);
            });
            // Cambiar imagen a flecha arriba
            iconoFlecha.src = 'assets/images/Flecha_hacia_arriba.png';
        } else {
            // Ocultar tarjetas extra
            tarjetasExtra.forEach(tarjeta => {
                tarjeta.classList.add('oculto');
                tarjeta.classList.remove('animar-entrada'); // quitamos animación
            });
            // Cambiar imagen a flecha abajo
            iconoFlecha.src = 'assets/images/Flecha_hacia_abajo.png';
        }

        // Opcional: llamar a reproducirAnimaciones para otros elementos si es necesario
        // pero no es obligatorio.
    });
}