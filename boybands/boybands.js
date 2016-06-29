var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
// *set as 5 because there are 5 items, bands.length would work for undetermined
var loopCount = 5;

// Keep track of which band we're on in the loop
// *makes an empty string for list item to be added later
var currentBand = "";

// Keep track of which veggie we're on in the loop
// *makes an empty string for list item to be added later
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
// *finds the element on page with correct ID
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
// *finds the element on page with correct ID
var veggieElement = document.getElementById("vegetables");

// Start looping
for (var i = 0; i < loopCount; i += 1) {

  // Add the band names into the correct <div>

  // *puts list items into empty string from above
  currentBand = "<li>" + bands[i] + "</li>";
  
  // *looks in the inner html area of the element for by ID and adds the above list items 
  bandElement.innerHTML += currentBand;

  // *console log for testing
  console.log("bands", bands[i]);
  
  // Add the veggie names into the correct <div>
  
  // *puts list items into empty string from above
  currentVeggie = "<li>" + vegetables[i] + "</li>";
  
  // *looks in the inner html area of the element for by ID and adds the above list items 
  veggieElement.innerHTML += currentVeggie;

  // *console log for testing
  console.log("vegetables", vegetables[i]);

}

/*Loop through the two arrays provided and 
output each element in the arrays into their corresponding HTML <div> element.
Ensure that each item is in a block element (e.g. li, div, p. etc...) */