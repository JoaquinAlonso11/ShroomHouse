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
  });
  