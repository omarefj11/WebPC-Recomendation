function toggleDarkMode() {
  
    var body = document.body;
    body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("dark-mode", "true");
    } else {
      localStorage.setItem("dark-mode", "false");
    }
}

function toggleMenu() {
  
  var body = document.body;
  body.classList.toggle("change-menu");
}

function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Mostrar el botón de ir arriba después de cierto desplazamiento
window.addEventListener('scroll', function() {
  var button = document.querySelector('.home');
  if (window.scrollY > 50) { // Cambia 300 al número de píxeles después de los cuales deseas mostrar el botón
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
});
