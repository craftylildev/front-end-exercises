var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/* 
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");

// function outputPlanet(currentPlanet) {
//   console.log("currentPlanet: ", currentPlanet);
//   el.innerHTML += `<div>${currentPlanet}</div>`;
// }
// planets.forEach(outputPlanet);

planets.forEach(function (currentPlanet) {
  el.innerHTML += `<div>${currentPlanet}</div>`;
});


// Use the map method to create a new array where the first letter of each planet is capitalized
var capPlanet = planets.map(function (currentPlanet) {
  return currentPlanet.charAt(0).toUpperCase() + currentPlanet.slice(1);
});

console.log("capPlanet : ", capPlanet)

// Use the filter method to create a new array that contains planets with the letter 'e'

var planetsWithE = planets.filter(function (currentPlanet) {
  return currentPlanet.indexOf("e") >= 0;
});
console.log("planetsWithE : ", planetsWithE);

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var newSentence = words.reduce(function (previousWord, currentWord) {
  return `${previousWord}` + " " + `${currentWord}`;
});

console.log("newSentence : ", newSentence);
