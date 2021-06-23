const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

//////////////////////////////////////////////////REMOVING THE, AN, A////////////////////////////////////////////////

function showArray() {
  for (var i = 0, len = bands.length; i < len; i++) {
    bands[i] = bands[i].replace("An ", "");
    bands[i] = bands[i].replace("A ", "");
    bands[i] = bands[i].replace("The ", "");
  }
}

///////////////////////////////////////////////REPLACING THE ELEMENTS (NOT IDEAL BUT WORKAROUND)//////////
function replaceThem() {
  for (var i = 0, len = bands.length; i < len; i++) {
    bands[i] = bands[i].replace("Bled", "The Bled");
    bands[i] = bands[i].replace("Devil Wears Prada", "The Devil Wears Prada");
    bands[i] = bands[i].replace("Midway State", "The Midway State");
    bands[i] = bands[i].replace("Plot in You", "The Plot in You");
    bands[i] = bands[i].replace("Old Dog", "An Old Dog");
    bands[i] = bands[i].replace("Skylit Drive", "A Skylit Drive");
  }
  document.getElementById("bands").innerHTML =
    "<li>" + bands.join("</li><li>") + "</li>";
}

showArray();
bands.sort();
replaceThem();

//if the first word is A, AN or THE, remove that spot.....order the array disregarding the words//
//slice if it contains//
//use join method to transform the array again//
//split turns sentence to array with seperator//
//" "//
//join//

// bands.join();
// bands.replace();
// bands.sort();

// to turn a sentence into an array//

// split, splice[1]
// Array.splice[0,1];

// ["hello","hi"]

// ["hello", "well hi"]

// array[1]="well hi"

console.log("Anywhere But Here".indexOf("yes"));
