/* 
 * Author: Marco Pena <marpena@csumb.edu>
 * Created: 20 February
 * License: Public Domain
 */

// declaring functions.
function firstThing(test) {
console.log(test + ": This is the first thing.<br>")
}

function secondThing(test) {
console.log(test + ": This is the second thing.<br>")
}

function thirdThing(test) {
console.log(test + ": This is the third thing.<br>")
}

// calling three functions in order.
firstThing("TEST 1");
secondThing("TEST 1");
thirdThing("TEST 1");

// callback with anonymous function.
setTimeout(function() {
	firstThing("TEST 2");
}, 0);

setTimeout(function() {
	secondThing("TEST 2");
}, 0);

setTimeout(function() {
	thirdThing("TEST 2");
}, 0);

// callback with anonymous function adjusting times.
// Order 2, 3, 1.
setTimeout(function() {
	firstThing("TEST 3");
}, 3000);

setTimeout(function() {
	secondThing("TEST 3");
}, 1000);

setTimeout(function() {
	thirdThing("TEST 3");
}, 2000);