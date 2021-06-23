// Get all <input> elements, and add event listeners

// const boxs = document. querySelectorAll ('.inbox input [type = "checkbox"]');

// 1. boxes. forEach (box => box. addEventListener ('click', handleCheck));

// 2. Write the processing logic in handleCheck

// Solve ideas

// First, what happens when you press the Shift key to perform multiple
// selections? The key point is that A and B define a range.

// 1. Check item A
// 2. Shift
// 3. Check item B again
// 4. All items between AB are selected.

// let checkbox = document.querySelectorAll('input[type="checkbox"]');

// checkbox.forEach((checkbox) =>
//   checkbox.addEventListener("click", function () {
//     console.log("hello");
//   })
// );

// checkbox[1].checked = true;

// // every checkbox between checkbox[i] and checkbox[j] should be checkbox.checked=true

// function doThing(event) {
//   event.shiftKey {
//     if (checkbox[0].checked == true && checkbox[2].checked == true) {
//       checkbox[1].checked == true;
//     }
//   }
// }

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);

let lastChecked;
function handleCheck(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
