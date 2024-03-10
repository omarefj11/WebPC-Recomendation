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