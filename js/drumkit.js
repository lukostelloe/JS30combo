let myDivs = document.querySelectorAll(".key");

document.onkeydown = function (e) {
  e = e || window.event;
  var key = e.which || e.keyCode;
  if (key === 65) {
    document.getElementById("A").play();
    myDivs[0].classList.add("playing");
  } else if (key === 83) {
    document.getElementById("B").play();
    myDivs[1].classList.add("playing");
  } else if (key === 68) {
    document.getElementById("C").play();
    myDivs[2].classList.add("playing");
  } else if (key === 70) {
    document.getElementById("D").play();
    myDivs[3].classList.add("playing");
  } else if (key === 71) {
    document.getElementById("E").play();
    myDivs[4].classList.add("playing");
  } else if (key === 72) {
    document.getElementById("F").play();
    myDivs[5].classList.add("playing");
  } else if (key === 74) {
    document.getElementById("G").play();
    myDivs[6].classList.add("playing");
  } else if (key === 75) {
    document.getElementById("H").play();
    myDivs[7].classList.add("playing");
  } else if (key === 76) {
    document.getElementById("I").play();
    myDivs[8].classList.add("playing");
  }
};

document.addEventListener("transitionend", () => {
  for (var i = 0; i < myDivs.length; i++) {
    myDivs[i].classList.remove("playing");
  }
});
