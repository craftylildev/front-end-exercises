// Create an HTML page that contains a text area and a button labeled Create.
var input = document.getElementById("textInput");
var createButton = document.getElementById("createButton");
var output = document.getElementById("output");
var deleteButton = document.getElementsByClassName("deleteButton");

// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM. You decide the height/width of the card.

function addCard() {
  // var outputContent = "";
  var addText = input.value;
  var outputContent = 
  `<div class="newCard">
    <button class="deleteButton">Delete</button>
    <div class="addtext">${addText}</div>
  </div>`;
  output.innerHTML += outputContent;
}
createButton.addEventListener("click", addCard);

// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.
document.querySelector("body").addEventListener("click", function(event) {
  // console.log(event);
  if (event.target.className === "deleteButton") {
    // console.log(event.target.parentNode);
    event.target.parentNode.remove();
  }
});

//add using enter btn
document.addEventListener('keyup', add)
function add(e) {
  if (e.which === 13) {
    addCard();
  }
}
