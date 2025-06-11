const hasMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hasMenu.addEventListener("click", () => {
  hasMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
