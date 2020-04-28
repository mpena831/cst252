/* 
 * Author: Marco Pena <marpena@csumb.edu>
 * Created: 1 April
 * License: Public Domain
 */

// Creating Vehicle class and storing info for vehicles.
class Vehicle { 
	constructor(make, model, year, color, extras) {
	this.rideMake = make;
	this.rideModel = model;
	this.rideYear = year;
	this.rideColor = color;
	this.rideExtras = extras;
}
	info() {
		return ("I have owned a " + this.rideMake + this.rideModel + this.rideYear + " and its color was " + this.rideColor + " with " + this.rideExtras)
	};
}

// Instantiating objects with our constructor
// for every vehicle we've ever owned.
vehicles = []
var car = new Vehicle ("Honda ", "Civic ", "2000 ", "Maroon ", "a darth vader bobble head.");
var car2 = new Vehicle ("Honda ", "Civic ", "2016 ", "Dark Gray ", "a backup camera.");

// calling our info()
// and outputing the results to our output div.
document.getElementById("output").innerHTML += "<p>" + car.info() + "</p>";
document.getElementById("output").innerHTML += "<p>" + car2.info() + "</p>";
