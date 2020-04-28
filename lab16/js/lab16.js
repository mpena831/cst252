/* 
 * Author: Marco Pena <marpena@csumb.edu>
 * Created: 11 April
 * License: Public Domain
 */


// Adding label and button.
$(document).ready(function() {
	$("#label1").append('<div><label for="button1">Here is my button.</label></div>');
	$("#button1").append('<div><button id="button1" type="button"></button>')
	// Changing the text inside the button and background color.
	$("#button1").html("Click on Me!").css("background-color", "#00cc66");
	// Alert box
	$("#button1").click(function() {
		alert("Thanks, carry on.")
	});
});