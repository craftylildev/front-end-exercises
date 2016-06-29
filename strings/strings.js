
var testString = "";

function getInput () {
  var input = document.getElementById("input").value;
  testString = input.toLowerCase();
  // console.log("testString", testString);
  reversal(testString);
  alphabits(testString);
  palindrome(testString);
}

function reversal() {
  var reverseString = testString.split('').reverse().join('');
  // console.log("revStr", reverseString);
  var outputReverse = document.getElementById("outputReverse");
  outputReverse.innerHTML = reverseString;
}

function alphabits() {
  var alphaString = testString.split('').sort().join('');
  var outputAlphabits = document.getElementById("outputAlphabits");
  outputAlphabits.innerHTML = alphaString;
}

function palindrome() {
  var palinString = testString.split('').reverse().join('');
  var checkString = testString;
  var outputPalidrome = document.getElementById("outputPalidrome");

  if(checkString === palinString){
    outputPalidrome.innerHTML = checkString + " is a palidrome";
  } else {      
    outputPalidrome.innerHTML = checkString + " is NOT a palidrome";
  } 

}

var button = document.getElementById("button");
button.addEventListener("click", getInput);


// Copy the code below into the JavaScript file
// In your HTML, create a text input and a button.
// The text input should only accept letters. No numbers.

// Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.

// Implement the logic in the alphabits function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.

// Implement the logic in the palindrome function that determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.

// When the user presses the enter key in the text input, or clicks the button, set the value of the testString variable (see below) to the value of the input.
// The output of each of the functions should immediately appear as well.