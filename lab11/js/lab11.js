/* 
 * Author: Marco Pena <marpena@csumb.edu>
 * Created: 2 March
 * License: Public Domain
 */

 // create function sortingHat()
 function sortingHat (str) {
 	// counts letters in str, puts it in var len
 	var len = str.length;
 	// use modulus to get remainder with 4
 	var mod = len % 4;
 	// create conditional 
 	if (mod == 0) {
 		return "Slytherin"
 	} else if (mod == 1) {
 		return "Ravenclaw"
 	} else if (mod == 2) {
 		return "Hufflepuff"
 	} else if (mod == 3) {
 		return "Griffindor"
 	}
 }

// create event listener attached to #button
 var myButton = document.getElementById("button").addEventListener
 ("click", function(){
 	// get value of #input and assign it var name
 	var name = document.getElementById("input").value;
 	// run sortHat(name), store results in var house
 	var house = sortingHat(name);
 	// outputs results
 	document.getElementById("output").innerText = house;
 })