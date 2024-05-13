// OPEN MENU FUNCTION
function openMenu(el) {
  const navMenu = document.querySelector(".nav-menu");
  el.name === "menu"
    ? ((el.name = "close"),
      navMenu.classList.add("top-[76px]"),
      navMenu.classList.add("opacity-100"))
    : ((el.name = "menu"),
      navMenu.classList.remove("top-[76px]"),
      navMenu.classList.remove("opacity-100"));
}
