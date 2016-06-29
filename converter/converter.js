// Write a program that will convert a temperature from fahrenheit to celsius, or from celsius to fahrenheit.

// In the HTML, have one input field where someone can enter in a temperature.
// Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number should be converted to.
// Create a block level element that will hold the text of the converted temperature.
// Create a button that, when clicked, displays the converted temperature.
// Create another button that, when clicked, clears any text in the input field.
// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.

function toCelsius (fahrenheit) {
  var convertedTemp = (fahrenheit - 32) * .5556;
  return convertedTemp;
}

function toFahrenheit (celsius) {
  var convertedTemp = (celsius * 1.8) + 32;
  return convertedTemp;
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
  
  var userTemperature = document.getElementById("enterTemp").value;
  var celsiusChecked = document.getElementById("chkCel").checked;
  var fahrenheitChecked = document.getElementById("chkFar").checked;
  var displayTemp = document.getElementById("convertedTemp");

  if (celsiusChecked) {
    console.log("cel check");
    toCelsius(userTemperature);
    console.log("toCelsius", toCelsius(userTemperature));
    displayTemp.innerHTML = toCelsius(userTemperature);
    if (toCelsius(userTemperature) >= 32) {
      displayTemp.style.color = "red";
    } else if (toCelsius(userTemperature) <= 0) {
      displayTemp.style.color = "blue";
    } else {
      displayTemp.style.color = "green";
    }
  }   
  else if (fahrenheitChecked) {
    console.log("far check");
    toFahrenheit(userTemperature);
    console.log("toFahrenheit", toFahrenheit(userTemperature));
    displayTemp.innerHTML = toFahrenheit(userTemperature);
    if (toFahrenheit(userTemperature) >= 90) {
      displayTemp.style.color = "red";
    } else if (toFahrenheit(userTemperature) <= 32) {
      displayTemp.style.color = "blue";
    } else {
      displayTemp.style.color = "green";
    }
  }
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

//* function created to set empty string for the value of the coins mount input
function clearButton () {
  document.getElementById("enterTemp").value = ""; 
  document.getElementById("convertedTemp").innerHTML = "";
}

//* finds button with correct ID 
var clear = document.getElementById("clear");
//* clears input value
clear.addEventListener("click", clearButton);