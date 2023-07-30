const hamburguerMenu = document.querySelector("#hamburguer");
const menu = document.querySelector("#menu");

hamburguerMenu.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburguerMenu.classList.toggle("bg-white");
});
