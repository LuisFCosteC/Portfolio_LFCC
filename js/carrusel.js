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
    
    function actualizarCarrusel() {
        carruselSlides.style.transform = `translateX(-${slideActual * 25}%)`;
        
        indicadores.forEach((indicador, index) => {
            if (index === slideActual) {
                indicador.classList.add('activo');
            } else {
                indicador.classList.remove('activo');
            }
        });
    }
    
    function siguienteSlide() {
        slideActual = (slideActual + 1) % totalSlides;
        actualizarCarrusel();
    }
    
    function anteriorSlide() {
        slideActual = slideActual === 0 ? totalSlides - 1 : slideActual - 1;
        actualizarCarrusel();
    }
    
    function irASlide(index) {
        if (index >= 0 && index < totalSlides) {
            slideActual = index;
            actualizarCarrusel();
        }
    }
    
    function iniciarAutoplay() {
        intervalo = setInterval(siguienteSlide, 5000);
    }
    
    function detenerAutoplay() {
        if (intervalo) {
            clearInterval(intervalo);
        }
    }
    
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
    
    indicadores.forEach((indicador, index) => {
        indicador.addEventListener('click', () => {
            detenerAutoplay();
            irASlide(index);
            iniciarAutoplay();
        });
    });
    
    const carrusel = document.querySelector('.carrusel');
    if (carrusel) {
        carrusel.addEventListener('mouseenter', detenerAutoplay);
        carrusel.addEventListener('mouseleave', iniciarAutoplay);
    }
    
    iniciarAutoplay();
    actualizarCarrusel();
}