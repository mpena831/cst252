/*
 *
 *
 *
 */

//Define Variables
myTransport = ["bike", "rides from friends", "bus"];

myMainRide = {
	make : "Honda",
	model : "Civic",
	color : "Gray",
	year : "2016",
	age : function() {
		return 2020 - year;
	}
}

//output
document.write("My main forms of transportation: ", myTransport, "</br>");
document.write("My main ride: <pre>",
	JSON.stringify(myMainRide, null, '\t'), "</pre>");
