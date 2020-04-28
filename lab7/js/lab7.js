/* 
 * Author: Marco Pena <marpena@csumb.edu>
 * Created: 18 February
 * License: Public Domain
 */

// Function that sorts letters of the user's name
// and returns them

 // Declaring function
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