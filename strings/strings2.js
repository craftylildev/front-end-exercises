
var testString = "";

function getString() {
  var input = document.getElementById("input").value;
  // console.log("value", input);
  testString = input;
  // console.log("test", testString);
  testString = testString.toLowerCase().split('');
  // console.log("test", testString);


  function reversal(getInput) {
    return getInput.reverse();
  }
  reversal(testString);
  // console.log("test", testString);
  var outputReverse = document.getElementById("outputReverse");
  outputReverse.innerHTML = testString.join('');


  function alphabits(getInput) {
    return getInput.sort();
  }
  alphabits(testString);
  // console.log("test", testString);
  var outputAlphabits = document.getElementById("outputAlphabits");
  outputAlphabits.innerHTML = testString.join('');

  function palindrome(getInput) {
    return getInput.reverse();
  }
  palindrome(testString);
   console.log("test", testString);
  var joinString = testString.join('');
  var reverseString = testString.join('');

  var outputPalidrome = document.getElementById("outputPalidrome");

    if(joinString === reverseString){
      outputPalidrome.innerHTML = joinString + " is a palidrome";
    } else {      
      outputPalidrome.innerHTML = joinString + " is NOT a palidrome";
    } 

}

var button = document.getElementById("button");
button.addEventListener("click", getString);

// Copy the code below into the JavaScript file
// In your HTML, create a text input and a button.
// The text input should only accept letters. No numbers.

// Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.

// Implement the logic in the alphabits function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.

// Implement the logic in the palindrome function that determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.

// When the user presses the enter key in the text input, or clicks the button, set the value of the testString variable (see below) to the value of the input.
// The output of each of the functions should immediately appear as well.