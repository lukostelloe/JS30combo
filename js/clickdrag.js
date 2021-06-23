const slider = document.querySelector(".items");
let clicked = false;
let startX;
let scrollLeft;

//////////////////////////////////when clicked slider active////////////////////////////////

slider.addEventListener("mousedown", function (e) {
  clicked = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

////////////////////////////////event to move the slider while mouse clicked///////////////////////////
slider.addEventListener("mousemove", function (e) {
  if (!clicked) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const slide = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - slide;
});
///////////////////////////////mouse leaves the screen, class active is inactive///////////////////////

slider.addEventListener("mouseleave", function () {
  clicked = false;
  slider.classList.remove("active");
});

///////////////////////////////mouse unclicked, class active is inactive///////////////////////

slider.addEventListener("mouseup", function () {
  clicked = false;
  slider.classList.remove("active");
});
