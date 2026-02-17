// js/navegacion.js - Manejo de navegación
export function configurarNavegacion() {
    const alternarMenu = document.querySelector('.alternar-menu');
    const menuMovil = document.querySelector('.menu-movil');
    
    if (!alternarMenu || !menuMovil) return;
    
    // Alternar del menú móvil
    alternarMenu.addEventListener('click', () => {
        const estaExpandido = alternarMenu.getAttribute('aria-expanded') === 'true';
        alternarMenu.setAttribute('aria-expanded', !estaExpandido);
        menuMovil.setAttribute('aria-hidden', estaExpandido);
        
        // Para lectores de pantalla
        if (!estaExpandido) {
            menuMovil.style.display = 'block';
            setTimeout(() => menuMovil.focus(), 100);
        } else {
            menuMovil.style.display = 'none';
        }
    });
    
    // Cerrar menú al hacer clic en un enlace
    const enlacesMoviles = document.querySelectorAll('.enlace-movil');
    enlacesMoviles.forEach(enlace => {
        enlace.addEventListener('click', () => {
            alternarMenu.setAttribute('aria-expanded', 'false');
            menuMovil.setAttribute('aria-hidden', 'true');
            menuMovil.style.display = 'none';
        });
    });
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (evento) => {
        if (!alternarMenu.contains(evento.target) && !menuMovil.contains(evento.target)) {
            alternarMenu.setAttribute('aria-expanded', 'false');
            menuMovil.setAttribute('aria-hidden', 'true');
            menuMovil.style.display = 'none';
        }
    });
    
    // Navegación suave para anclas
    document.querySelectorAll('a[href^="#"]').forEach(ancla => {
        ancla.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            if (href !== '#inicio') {
                e.preventDefault();
            }
            
            const elementoObjetivo = document.querySelector(href);
            if (elementoObjetivo) {
                if (alternarMenu.getAttribute('aria-expanded') === 'true') {
                    alternarMenu.setAttribute('aria-expanded', 'false');
                    menuMovil.setAttribute('aria-hidden', 'true');
                    menuMovil.style.display = 'none';
                }
                
                window.scrollTo({
                    top: elementoObjetivo.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                document.querySelectorAll('.enlace-navegacion, .enlace-movil').forEach(enlace => {
                    enlace.classList.remove('activo');
                });
                this.classList.add('activo');
            }
        });
    });
    
    // Cambiar clase activa al navegar
    const actualizarEnlaceActivo = () => {
        const secciones = document.querySelectorAll('section[id], header[id]');
        const enlacesNavegacion = document.querySelectorAll('.enlace-navegacion, .enlace-movil');
        
        let actual = '';
        secciones.forEach(seccion => {
            const parteSuperiorSeccion = seccion.offsetTop;
            const alturaSeccion = seccion.clientHeight;
            if (window.scrollY >= parteSuperiorSeccion - 150) {
                actual = seccion.getAttribute('id');
            }
        });
        
        enlacesNavegacion.forEach(enlace => {
            enlace.classList.remove('activo');
            if (enlace.getAttribute('href') === `#${actual}`) {
                enlace.classList.add('activo');
            }
        });
    };
    
    window.addEventListener('scroll', actualizarEnlaceActivo);
}