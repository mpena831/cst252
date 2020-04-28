/* 
 * Author: Marco Pena <marpena@csumb.edu>
 * Created: 25 February
 * License: Public Domain
 */

// Find output div and assign variable.
var outputEl = 
	document.getElementById("output");
// create new element and assign variable new1El.
var new1El = 
	document.createElement("p");
// change html attribute of new1El.
new1El.innerHTML = "Something New.";
// create new element and assing variable new2El.
var new2El = 
	document.createElement("p");
// change html attribute of neweEl.
new2El.innerHTML = "Something Else.";
// append both new elements.
document.getElementById("output")
	.appendChild(new1El).appendChild(new2El);

// change css properties of two elements.
new1El.style.color = "orange";
new2El.style.color = "pink";
new2El.style.fontSize = "20pt";