function toggleNav(event) {
    event.preventDefault(); // Evitar recarga de página
    let navbarLinks = document.getElementById("navbar-links");
    let navbarToggle = document.querySelector(".navbar-toggle");

    navbarLinks.classList.toggle("active");
    navbarToggle.classList.toggle("active");
}

// Agrega un event listener para cerrar la lista de navegación cuando se hace clic fuera de ella
document.addEventListener("click", function (event) {
    const navbarLinks = document.getElementById("navbar-links");
    const navbarToggle = document.querySelector(".navbar-toggle");

    if (!navbarLinks.contains(event.target) && !navbarToggle.contains(event.target)) {
        navbarLinks.classList.remove("active");
        navbarToggle.classList.remove("active");
    }
});

// Event listener para manejar cambios en el tamaño de la ventana
window.addEventListener("resize", function () {
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    const navbarLinks = document.getElementById("navbar-links");
    const navbarToggle = document.querySelector(".navbar-toggle");

    if (windowWidth > 768) {
        navbarLinks.classList.remove("active");
        navbarToggle.classList.remove("active");
    }
});


