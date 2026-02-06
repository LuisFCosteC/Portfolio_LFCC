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
            }
        });
    }, opcionesObservador);
    
    // Elementos a observar
    document.querySelectorAll('.contenido-hero, .imagen-hero').forEach(elemento => {
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