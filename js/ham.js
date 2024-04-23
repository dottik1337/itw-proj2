const navBar = document.querySelector("#nav_flexcontainer");
const hamMenu = document.querySelector("#ham");

hamMenu.addEventListener("click", () => {
    navBar.classList.toggle("active");
});