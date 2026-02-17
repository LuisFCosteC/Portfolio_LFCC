// js/animaciones.js - Animaciones y efectos
export function configurarAnimaciones() {
    // Aplicar animación a elementos visibles al cargar
    const elementosIniciales = document.querySelectorAll('.contenido-hero, .imagen-hero, .seccion-carrusel-texto, .seccion-tecnologias');
    elementosIniciales.forEach(el => el.classList.add('animar-entrada'));

    // Observador para elementos que aparecen con scroll
    const opcionesObservador = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('animar-entrada');
                
                // Si es la sección de tecnologías, animar cada item con delay
                if (entrada.target.classList.contains('seccion-tecnologias')) {
                    const items = entrada.target.querySelectorAll('.tecnologia-item');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('animar-entrada');
                        }, index * 100);
                    });
                }
                
                // Si es una tarjeta de proyecto (para animación individual)
                if (entrada.target.classList.contains('tarjeta-proyecto')) {
                    // No necesita acción adicional, ya se anima con la clase
                }
                
                // Dejar de observar una vez animado
                observador.unobserve(entrada.target);
            }
        });
    }, opcionesObservador);
    
    // Observar elementos que no hayan sido animados aún (por si no eran visibles al inicio)
    document.querySelectorAll('.contenido-hero, .imagen-hero, .seccion-carrusel-texto, .seccion-tecnologias').forEach(elemento => {
        if (!elemento.classList.contains('animar-entrada')) {
            observador.observe(elemento);
        }
    });

    // NUEVO: Observar tarjetas de proyecto
    document.querySelectorAll('.tarjeta-proyecto').forEach(tarjeta => {
        if (!tarjeta.classList.contains('animar-entrada')) {
            observador.observe(tarjeta);
        }
    });

    document.querySelectorAll('.imagen-proyecto').forEach(imagen => {
        if (!imagen.classList.contains('animar-entrada')) {
            observador.observe(imagen);
        }
    });
}

// Función para reproducir animaciones manualmente (al cambiar idioma)
export function reproducirAnimaciones() {
    // Elementos principales
    const elementos = document.querySelectorAll('.contenido-hero, .imagen-hero, .seccion-carrusel-texto, .seccion-tecnologias, .tarjeta-proyecto');
    elementos.forEach(el => {
        el.classList.remove('animar-entrada');
        // Forzar reflow
        void el.offsetWidth;
        el.classList.add('animar-entrada');
    });

    // Items de tecnología dentro de la sección (si ya está visible)
    const seccionTec = document.querySelector('.seccion-tecnologias');
    if (seccionTec && seccionTec.classList.contains('animar-entrada')) {
        const items = seccionTec.querySelectorAll('.tecnologia-item');
        items.forEach((item, index) => {
            item.classList.remove('animar-entrada');
            setTimeout(() => {
                item.classList.add('animar-entrada');
            }, index * 100);
        });
    }
}