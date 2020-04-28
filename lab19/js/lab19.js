/* 
 * Author: Marco Pena <marpena@csumb.edu>
 * Created: 21 April
 * License: Public Domain
 */


// Adding click event to the button
$("#activate").click(function(){
	// Use a jQuery AJAX call to fetch output from your API
	// Using the core $.ajax() method
	$.ajax({
 	// The URL for the request
 		url: "https://dog.ceo/api/breeds/image/random",
 	// The data to send (will be converted to a query string)
 		data: { },
 	// Whether this is a POST or GET request
		type: "GET",
 	
	// Put the output of the AJAX call in the output div.
		success: function(data,status) {
			$("#output").html("<img src='" + data.message + "'>");
		}
	}); 	
});