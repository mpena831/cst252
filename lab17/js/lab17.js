/* 
 * Author: Marco Pena <marpena@csumb.edu>
 * Created: 11 April
 * License: Public Domain
 */

// Add a click event to each button
$("#challenge-button").click(function() {
	// Toggle a new class within the div
	$("#challenges").toggleClass("change1");
});

$("#problem-button").click(function() {
	// Toggle a new class within the div
	$("#problems").toggleClass("change2");
});

$("#results-button").click(function() {
	// Toggle a new class within the div
	$("#results").toggleClass("change3");
});





