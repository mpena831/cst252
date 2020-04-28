/* 
 * Author: Marco Pena <marpena@csumb.edu>
 * Created: 7 March
 * License: Public Domain
 */


var output = document.getElementById("output");

// Loop through numbers 1 to 200, increments of 1
for (var i=1; i < 211; i++) {
	//
 	var outputStr = '';
 	// create new element called newEL 
 	// and add a paragraph "p"
 	var newEl = document.createElement("p");
 	// if integer is a multiple of 3,
 	// print Fizz
 	if (i % 3 == 0) {
 		outputStr += "Fizz";
 	}
 	// if integer is a multiple of 2,
 	// print Bang
 	if (i % 2 == 0) {
 		outputStr += "Bang";
 	}
 	// if integer is a multiple of 5,
 	// print Buzz
 	if (i % 5 == 0) {
 		outputStr += "Buzz";
 	}
 	// if integer is a multiple of 7,
 	// print Boom
	if (i % 7 == 0) {
 		outputStr += "Boom";
 	}
 	// prints number followed by output string
 	if (outputStr) {
 		newEl.innerText = i + " - " + outputStr;
 		output.appendChild(newEl);
 	}
 	// every other number just prints
 	else {
 		newEl.innerText = i;
 		output.appendChild(newEl);
 	}
}


