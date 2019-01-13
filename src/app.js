const menuBtn = document.querySelector(".menu-btn");
const Container = document.querySelector(".Container");
const menu = document.querySelector(".menu");

let showMenu = false;

menuBtn.addEventListener("click", ShiftMenu);

function ShiftMenu() {
  if (!showMenu) {
    //add close class
    menuBtn.classList.add("close");
    Container.classList.add("shift1");
    Container.classList.remove("shift2");
    console.log("shift 1");

    //menu.classList.add("show");
    //menuNav.classList.add("show");
    //menuBranding.classList.add("show");
    //navItems.forEach(item => item.classList.add("show"));
    //set menu state

    showMenu = true;
  } else {
    Container.classList.remove("shift1");

    menuBtn.classList.remove("close");
    Container.classList.add("shift2");
    console.log("shift 2");
    //menuBtn.classList.remove("close");
    // menu.classList.remove("show");
    //menuNav.classList.remove("show");
    //menuBranding.classList.remove("show");
    //navItems.forEach(item => item.classList.remove("show"));
    showMenu = false;
  }
}
