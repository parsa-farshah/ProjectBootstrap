let menuOpen = document.getElementById("menu");
let btnMenu = document.getElementById("btn");
let closeBtn = document.getElementById("closeBtn");

// open button

btnMenu.addEventListener("click", () => {
  menuOpen.classList.add("open");
});
// close button
closeBtn.addEventListener("click", () => {
  menuOpen.classList.remove("open");
});
