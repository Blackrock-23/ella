document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector(".menu-btn");
    const navMenu = document.querySelector("nav ul");

    menuBtn.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });
});

// Fecha objetivo: 1 de junio de 2025 (Año, Mes (0-11), Día)
const targetDate = new Date(2025, 5, 1, 0, 0, 0).getTime(); // 1 de junio de 2025


function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    } else {
        document.querySelector(".countdown h2").textContent = "¡Feliz Aniversario, mi amor! 💖";
        document.querySelector(".timer").style.display = "none";
    }
}

// Actualiza el contador cada segundo
setInterval(updateCountdown, 1000);
updateCountdown(); // Llamar una vez para que no haya retraso

// Función para ir a la galería completa al hacer clic en "Ver más"
function scrollToGallery() {
    document.getElementById("full-gallery").scrollIntoView({ behavior: "smooth" });
}
