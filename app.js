const menu = document.querySelector(".menu");
const content = document.querySelector(".content");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {
  // Show the menu
  nav.classList.toggle("active");
  //   blur the background when menu opened
  content.classList.toggle("blur-effict");
  menu.classList.toggle("activeated");
  if (menu.classList.contains("activeated")) {
    menu.src = "assets/images/icon-menu-close.svg";
  } else {
    menu.src = "assets/images/icon-menu.svg";
  }
});
