//Menü açma kapama, menü açıldığında menü ikonu yerine x gelmesi.
const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("fa-x");
    navbar.classList.toggle("active");
});

//Tıklanan öğe menü veya menü işareti değilse menüyü kapat
document.addEventListener("click", (event) => {
    if (!event.target.closest("#navbar") && !event.target.closest("#menu-icon") && navbar.classList.contains("active")) {
        menuIcon.classList.remove("fa-x");
        navbar.classList.remove("active");
    }
});