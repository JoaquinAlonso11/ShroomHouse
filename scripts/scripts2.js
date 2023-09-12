document.addEventListener("DOMContentLoaded", function() {
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
});