document.addEventListener("DOMContentLoaded", function() {
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