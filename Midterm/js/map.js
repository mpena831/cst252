var china = document.getElementById("china");
var usa = document.getElementById("usa");
var italy = document.getElementById("italy");
var spain = document.getElementById("spain");
var germany = document.getElementById("germany");

china.addEventListener("click" , showCountry);
usa.addEventListener("click" , showCountry);
italy.addEventListener("click" , showCountry);
spain.addEventListener("click" , showCountry);
germany.addEventListener("click" , showCountry);

function showCountry(){
 //  var all = document.getElementById("countries");
 // for (var i = 0; i < all.length; i++){
 //  all[i].className = ".hide";
 // }

// var hideEverything = function hideEverything() {
//     var hideCountrie = document.querySelectorAll("countries");
//     for (var i = 0; i < hideCountrie.length; i++) {
//         hideCountrie[i].style.display = 'none';
//     }
// }

  var countryId = this.attributes["data-btn"].value;
  var country = document.getElementById(countryId);
  if (country.className == "hide") {
    country.className = "";
  } else {
    country.className = "hide";
  }
}

var myVideo = document.getElementById("video");

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 
