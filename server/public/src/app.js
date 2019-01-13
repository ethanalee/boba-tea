const menuBtn = document.querySelector(".menu-btn");
const FindBtn = document.querySelector(".btn-secondary");
const commentBtn = document.querySelector(".commentBox");
const Container = document.querySelector(".Container");
const menu = document.querySelector(".menu");
const CommentSection = document.querySelector("form-control")

let showMenu = false;


FindBtn.addEventListener("click", ShiftMenu);
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

commentBtn.addEventListener("click",clearField);

	function clearField(){
		//document.getElementsByClassName(CommentSection).reset();
		console.log("inside");
		location.reload();
	}

		/*

if (clear) {
	function clearField(){
		var value = document.getElementsByClassName(CommentSection);
		if (value)
		{
			value.reset();
			console.log("inside");
		}
	}
}*/

