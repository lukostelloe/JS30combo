var navbar = document.getElementById("main");
var sticky = navbar.offsetTop;
var logo = document.querySelector(".logo");

function scrollStick() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    logo.style.maxWidth = "250px";
    navbar.style.boxShadow = "5px 5px 5px grey";
  } else {
    navbar.classList.remove("sticky");
    document.querySelector(".logo").style.maxWidth = "0px";
    navbar.style.boxShadow = "0px 0px 0px grey";
  }
}
