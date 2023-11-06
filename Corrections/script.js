let navMenu = document.getElementById("nav-menu");
let menuIcon = document.getElementById("menu-icon");

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active')
})