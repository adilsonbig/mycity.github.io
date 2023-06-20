const menuBar = document.querySelector(".menu-bar");
const navMenu = document.querySelector(".nav-menu");

menuBar.addEventListener("click", () => {
    menuBar.classList.toggle('active');
    navMenu.classList.toggle('active');
    
})