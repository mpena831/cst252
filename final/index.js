function myFunction() {
  var x = document.getElementById("numb").value;
  var china = document.getElementById("country-china");
  var italy = document.getElementById("country-italy");
  var germany = document.getElementById("country-germany");
  var spain = document.getElementById("country-spain");
  var usa = document.getElementById("country-usa");
  var world = document.getElementById("country-world");

  if (x == 'china') {
    china.style.display = "block";
    italy.style.display = "none";
    germany.style.display = "none";
    spain.style.display = "none";
    usa.style.display = "none";
    world.style.display = "none";
  } else if (x == 'italy') {
    italy.style.display = "block";
    china.style.display = "none";
    germany.style.display = "none";
    spain.style.display = "none";
    usa.style.display = "none";
    world.style.display = "none";
  } else if (x == 'germany') {
    germany.style.display = "block";
    italy.style.display = "none";
    china.style.display = "none";
    spain.style.display = "none";
    usa.style.display = "none";
    world.style.display = "none";
  } else if (x == 'spain') {
    spain.style.display = "block";
    germany.style.display = "none";
    italy.style.display = "none";
    china.style.display = "none";
    usa.style.display = "none";
    world.style.display = "none";
  } else if (x == 'usa') {
    usa.style.display = "block";
    spain.style.display = "none";
    germany.style.display = "none";
    italy.style.display = "none";
    china.style.display = "none";
    world.style.display = "none";
  } else if (x == 'world') {
    world.style.display = "block";
    usa.style.display = "none";
    spain.style.display = "none";
    germany.style.display = "none";
    italy.style.display = "none";
    china.style.display = "none";
  } else if (x == ''){
    world.style.display = "block";
    usa.style.display = "none";
    spain.style.display = "none";
    germany.style.display = "none";
    italy.style.display = "none";
    china.style.display = "none";
  }
  else {
    alert("Invalid, Please select a country from the dropdown menu.")
  }
};

var myVideo = document.getElementById("video");

function playPause() { 
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 
