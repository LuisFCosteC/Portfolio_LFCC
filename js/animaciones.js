// js/animaciones.js - Animaciones y efectos
export function configurarAnimaciones() {
    // Observador para animaciones al hacer scroll
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
            }
        });
    }, opcionesObservador);
    
    // Elementos a observar
    document.querySelectorAll('.contenido-hero, .imagen-hero, .seccion-carrusel-texto, .seccion-tecnologias').forEach(elemento => {
        observador.observe(elemento);
    });
    
    // Efecto de escritura para el título (opcional)
    const tituloHero = document.querySelector('.titulo-hero .gradiente-titulo');
    if (tituloHero) {
        const texto = tituloHero.textContent;
        tituloHero.textContent = '';
        
        let i = 0;
        const maquinaEscribir = () => {
            if (i < texto.length) {
                tituloHero.textContent += texto.charAt(i);
                i++;
                setTimeout(maquinaEscribir, 50);
            }
        };
        
        // Iniciar después de un retraso
        setTimeout(maquinaEscribir, 1000);
    }
}