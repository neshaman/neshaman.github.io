const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-menu");
let menuOpen = false;

menuButton.addEventListener("click", () => {
  if (!menuOpen) {
    menuButton.classList.add("menu-open");
    navMenu.classList.add("menu-open");
    menuOpen = true;
  } else {
    menuButton.classList.remove("menu-open");
    navMenu.classList.remove("menu-open");
    menuOpen = false;
    console.log("closed clicked");
  }
});
