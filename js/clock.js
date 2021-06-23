setInterval(function setClock() {
  var date = new Date();

  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  var hands = [
    {
      hand: "hours",
      angle: hours * 30 + minutes / 2,
    },
    {
      hand: "mins",
      angle: minutes * 6,
    },
    {
      hand: "seconds",
      angle: seconds * 6,
    },
  ];

  for (var j = 0; j < hands.length; j++) {
    var elements = document.getElementsByClassName("hand " + hands[j].hand);
    for (var k = 0; k < elements.length; k++) {
      elements[k].style.transform = "rotateZ(" + hands[j].angle + "deg)";
      if (hands[j].hand === "minutes") {
        elements[k].parentNode.setAttribute(
          "data-second-angle",
          hands[j + 1].angle
        );
      }
    }
  }
}, 1000);
