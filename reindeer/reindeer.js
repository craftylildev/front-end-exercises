var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var hohohoElement = document.getElementById("coloredReindeer");

// loops thru both arrays and concatenates corresponding indexes
/*for (var i = 0; i < reindeer.length; i++) {
		document.getElementById("coloredReindeer").innerHTML += colors[i] + " " + reindeer[i] + "<br>";
		console.log("fullNames", colors[i] + " " + reindeer[i]);
	}
*/

  // loops thru both arrays and concatenates corresponding indexes
for (var i = 0; i < reindeer.length; i++) {
    hohohoElement.innerHTML += colors[i] + " " + reindeer[i] + "<br>";
    // console.log("fullNames", colors[i] + " " + reindeer[i]);
  }