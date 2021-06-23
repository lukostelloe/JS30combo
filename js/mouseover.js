const hero = document.querySelector(".hero");
const text = hero.querySelector(".pizza");
const move = 50;

function effect(e) {
  ////////////////////////////////convert size of hero div to variable///////////////////////////////

  const width = hero.offsetWidth;
  const height = hero.offsetHeight;

  //////////////////////////get coordinates of window////////////////////////////////////////////////////

  let { clientX: x, clientY: y } = e;

  const xMove = (x / width) * move - move / 2;
  const yMove = (y / height) * move - move / 2;

  ////////////////////////////////////////////////adds 4 text shadow elements/////////////////////////////////////////////

  text.style.textShadow = `
  ${xMove}px ${yMove}px 2px blue,
  ${xMove * -1}px ${yMove}px 2px red
  `;
}

// ${yMove}px ${xMove * -1}px 2px yellow,
// ${yMove * -1}px ${xMove}px 2px green
/////////////////////////////////////////////////////listen for mouse move, call function///////////////////////////////////////

hero.addEventListener("mousemove", effect);
