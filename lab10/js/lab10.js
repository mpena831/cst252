/* 
 * Author: Marco Pena <marpena@csumb.edu>
 * Created: 29 February
 * License: Public Domain
 */

var button = document.getElementById('my-button')
.addEventListener('click', function() {

	// getting input and assigning it as a variable userName
	var userName = document.getElementById("user-name").value;

	// takes the input(string) and splits to array, sorts it, 
	// and finally joins it back to string. All in one line.
	var nameSorted = userName.split('').sort().join('');

	// create new paragraph element.
	var newEl = document.createElement("p");

	// adds the value of nameSorted into the new element.
	newEl.innerText = nameSorted;

	// append child (newEl)
	document.getElementById("output")
		.appendChild(newEl);
});


// Lab 7 code
/*
 function sortUserName() {
 	var userName = window.prompt("Sup. Write your name so I can sort it. I dare you.");
 	console.log("userName =", userName);
 	// splitting string to array
 	var nameArray = userName.split('');
 	console.log("nameArray =", nameArray);
 	// sorting array
 	var nameArraySort = nameArray.sort();
 	console.log("nameArraySort =", nameArraySort);
 	//joining array back to string
 	var nameSorted = nameArraySort.join('');
 	console.log("nameSorted =", nameSorted);
 	return nameSorted;
 }

 // output
 document.write("Yo! Your name has been fixed: ",
 	sortUserName(), "</br>");
*/