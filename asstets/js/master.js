let menuOpen = document.getElementById("menu");
let btnMenu = document.getElementById("btn");
let closeBtn = document.getElementById("closeBtn");
console.log(btnMenu);

btnMenu.addEventListener("click", () => {
  menuOpen.classList.add("open");
  console.log("hello");
});
closeBtn.addEventListener("click", () => {
  menuOpen.classList.remove("open");
  console.log("hello");
});
