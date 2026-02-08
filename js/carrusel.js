// js/carrusel.js - Funcionalidad del carrusel
export function configurarCarrusel() {
    const carruselSlides = document.querySelector('.carrusel-slides');
    const slides = document.querySelectorAll('.carrusel-slide');
    const indicadores = document.querySelectorAll('.indicador');
    const btnAnterior = document.querySelector('.carrusel-control.anterior');
    const btnSiguiente = document.querySelector('.carrusel-control.siguiente');
    
    if (!carruselSlides || slides.length === 0) return;
    
    let slideActual = 0;
    const totalSlides = slides.length;
    let intervalo;
    
    // Función para actualizar el carrusel
    function actualizarCarrusel() {
        // Mover el carrusel
        carruselSlides.style.transform = `translateX(-${slideActual * 25}%)`;
        
        // Actualizar indicadores
        indicadores.forEach((indicador, index) => {
            if (index === slideActual) {
                indicador.classList.add('activo');
            } else {
                indicador.classList.remove('activo');
            }
        });
    }
    
    // Función para ir al slide siguiente
    function siguienteSlide() {
        slideActual = (slideActual + 1) % totalSlides;
        actualizarCarrusel();
    }
    
    // Función para ir al slide anterior
    function anteriorSlide() {
        slideActual = slideActual === 0 ? totalSlides - 1 : slideActual - 1;
        actualizarCarrusel();
    }
    
    // Función para ir a un slide específico
    function irASlide(index) {
        if (index >= 0 && index < totalSlides) {
            slideActual = index;
            actualizarCarrusel();
        }
    }
    
    // Iniciar autoplay
    function iniciarAutoplay() {
        intervalo = setInterval(siguienteSlide, 5000); // Cambia cada 5 segundos
    }
    
    function detenerAutoplay() {
        if (intervalo) {
            clearInterval(intervalo);
        }
    }
    
    // Event listeners para controles
    if (btnSiguiente) {
        btnSiguiente.addEventListener('click', () => {
            detenerAutoplay();
            siguienteSlide();
            iniciarAutoplay();
        });
    }
    
    if (btnAnterior) {
        btnAnterior.addEventListener('click', () => {
            detenerAutoplay();
            anteriorSlide();
            iniciarAutoplay();
        });
    }
    
    // Event listeners para indicadores
    indicadores.forEach((indicador, index) => {
        indicador.addEventListener('click', () => {
            detenerAutoplay();
            irASlide(index);
            iniciarAutoplay();
        });
    });
    
    // Pausar autoplay al pasar el mouse
    const carrusel = document.querySelector('.carrusel');
    if (carrusel) {
        carrusel.addEventListener('mouseenter', detenerAutoplay);
        carrusel.addEventListener('mouseleave', iniciarAutoplay);
    }
    
    // Iniciar autoplay
    iniciarAutoplay();
    
    // Actualizar carrusel inicial
    actualizarCarrusel();
}