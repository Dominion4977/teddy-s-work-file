let menubtn = document.getElementById("menubtn");
let sideNav = document.getElementById("sideNav");
let menu = document.getElementById("menu")
sideNav.style.right = "-250px";
menubtn.onclick = function () {
  if (sideNav.style.right == "-250px") {
      sideNav.style.right = "0";
      menu.src = "../image/closed.png";
  }
  else {
      sideNav.style.right = "-250px";
      menu.src = " ../image/menu.png"
  }
}

let scroll = new SmoothScroll('a[href*="#"]', {  
speed:1000,
  speedAsDuration: true
});


// open image effects
function FullimageView(imgLink) {
  document.getElementById("Fullimage").src = imgLink;
  document.getElementById("FullimageView").style.display = "block";
}
function CloseFullView() {
  document.getElementById("FullimageView").style.display = "none";
}
// ends here





