/* 
 * Author: Marco Pena <marpena@csumb.edu>
 * Created: 24 April
 * License: Public Domain
 */


// Adding click event to the button.
$("#activate").click(function(){
	// Used $.getJSON() to retrieve data.
	$.getJSON("https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json", function(result){
 		// Stored object in vairable comicObj.
 		var comicObj = result;
 		// Processed the parts and added them with appropriate tags.
 		// Gave section a title.
		$("#output").append("<h3>" + comicObj.title + "</h3>");
		// Created image tag.
		$("#output").append("<img src='" + comicObj.img + "'>");
		// Gave image an alt attribute.
		$("#output > img").attr("alt", comicObj.alt);
	}); 	
});