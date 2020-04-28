/* 
 * Author: Marco Pena <marpena@csumb.edu>
 * Created: 24 March
 * License: Public Domain
 */

// Constructor for vehicles.
function Vehicle(make, model, year, color, extras) {
	this.rideMake = make;
	this.rideModel = model;
	this.rideYear = year;
	this.rideColor = color;
	this.rideExtras = extras;
	this.info = function() {
		return("I have owned a " + this.rideMake + this.rideModel + this.rideYear + " and its color was " + this.rideColor + " with " + this.rideExtras)
	};
}

// Instantiating objects with our constructor
// for every vehicle we've ever owned.
vehicles = []
var car = new Vehicle ("Honda ", "Civic ", "2000 ", "Maroon ", "a darth vader bobble head.");
var car2 = new Vehicle ("Honda ", "Civic ", "2016 ", "Dark Gray ", "a backup camera.");

// calling our method info()
// and outputing the results to our output div.
document.getElementById("output").innerHTML += "<p>" + car.info() + "</p>";
document.getElementById("output").innerHTML += "<p>" + car2.info() + "</p>";
