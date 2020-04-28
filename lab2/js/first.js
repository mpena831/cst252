// first.js
// Our first JavaScript program
// Author: Marco Pena <marpena@csumb.edu>
// Date: 27 jan 2020
// License: MIT

// generate some text
var sheepText = "";
for (i=0; i<100; i++) {
	sheepText += "Sheep Number " + i + "<br>";
}
console.log(sheepText);

// generate new element
newEl = document.createElement ("P");

// add text to elements
newEl.innerHTML = sheepText;

// find output div
oldEl = document.getElementById("output");

// put new elements in output div
oldEl.appendChild(newEl);