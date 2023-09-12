document.addEventListener("DOMContentLoaded", function() {
    // Script 1: Manipulación del menú de navegación
    const menuNav = document.querySelector("#menuNav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");
  
    abrir.addEventListener("click", () => {
      menuNav.classList.add("visible");
    });
  
    cerrar.addEventListener("click", () => {
      menuNav.classList.remove("visible");
    });
  
// Script 2: Carrusel de imágenes
// Script 2: Carrusel de imágenes
let slideIndex = 1;
let interval;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
  clearInterval(interval);
  startInterval();
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  clearInterval(interval);
  startInterval();
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slideContainer");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

function startInterval() {
  interval = setInterval(function() {
    plusSlides(1);
  }, 7000);
}

// Manejo de clics en flechas
document.getElementById("anterior").addEventListener("click", function() {
  plusSlides(-1); // Retrocede un slide
});

document.getElementById("siguiente").addEventListener("click", function() {
  plusSlides(1); // Avanza un slide
});
  
    // Script 3: Testimonios
    const testimoniosSlides = document.querySelectorAll('.testimonios');
    const dotButtons = document.querySelectorAll('.dot');
  
    let testimonioIndex = 0;
  
    function mostrarTestimonioSlide(index) {
      testimoniosSlides.forEach(testimonioSlide => {
        testimonioSlide.style.display = 'none';
      });
      testimoniosSlides[index].style.display = 'block';
    }
  
    function activarDotButton(index) {
      dotButtons.forEach(dot => {
        dot.classList.remove('active');
      });
      dotButtons[index].classList.add('active');
    }
  
    function cambiarTestimonioSlide(index) {
      mostrarTestimonioSlide(index);
      activarDotButton(index);
    }
  
    dotButtons.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        cambiarTestimonioSlide(index);
        testimonioIndex = index;
      });
    });
  
    mostrarTestimonioSlide(testimonioIndex);
    activarDotButton(testimonioIndex);
  });
  