const boton = document.querySelector("#boton");
const menu = document.querySelector("#menu");
boton.addEventListener("click", () => {
  console.log("[DEBUG] Open the navbar with the menu icon");
  menu.classList.toggle("hidden");
});
