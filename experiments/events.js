// Events.js
// An experiment with Javascript events
// Author:


//Create an event handler within the JS file 
//that listens for a button click.
var button = document.getElementById('my-button');
console.log("Here da button", button);

button.addEventListener('click', function() {
//When the button is pushed, prompt the 
//user to input theirname with the prompt() function.
// var name = prompt("What is your name?");
var name = document.getElementById("name-field").value;
console.log("Name iz", name);

//Use this input to change the text from 
//‘Hello, World!’ to ‘Hello’ + the user’s name
var heading = document.getElementById("my-heading");
console.log("heading!", heading);
heading.innerHTML = ("Hello, " + name);
});

// Create hover event
button.addEventListener("mouseover", function() {
// move button in random direction
// 
var x_delta = Math.floor(Math.random() * 100) + -100;
var y_delta = Math.floor(Math.random() * 100) + -100;
console.log("random change x,y", x_delta, y_delta);
var top = button.offsetTop;
var left = button.offsetLeft;
button.style.top = top + y_delta + "px";
button.style.left = left + x_delta + "px";
});

