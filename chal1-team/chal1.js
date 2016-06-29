// addCard function
var outputContent = "";
function addCard() {
  var inputText = document.getElementById("inputText").value;

  var output = document.getElementById("output");

  // start with empty string
  outputContent += "<div class='newCard'>";
  outputContent += "<input id='pickBackgroundColor' type='color'>";
  outputContent += "<input id='pickTextColor' type='color'>";
  outputContent += "<button class='deleteButton'>Delete</button>"
  outputContent += "<div class='inputText'>" + inputText + "</div>";
  outputContent += "</div>";
  // input all content to DOM
  output.innerHTML = outputContent;

  //console.log("bkgColorOutput", bkgColorOutput);
  bkgColorInput = document.getElementById("pickBackgroundColor");
  function changeBkgColor(event) {
      // background color picker value
    var bkgColorOutput = bkgColorInput.value;
      // console.log("test", bkgColorOutput);  
    // set background color
      // console.log("target", event.target);
      // console.log("current target", event.currentTarget);
    event.target.parentElement.style.backgroundColor = bkgColorOutput;
      // console.log("event", event.target.parentElement);
      // console.log("event", event);
  }
  bkgColorInput.addEventListener("input", changeBkgColor);

  textColorInput = document.getElementById("pickTextColor");
  function changeTextColor(event) {
      // text color picker value
    var textColorOutput = textColorInput.value;
    // set text color
    event.target.parentElement.style.color = textColorOutput;
  }
  textColorInput.addEventListener("input", changeTextColor);

  // delete card
  function deleteCard(event) {
    // output.innerHTML = "";    
    console.log("event", this.parentNode);
    this.parentNode.parentNode.removeChild(this.parentNode);
  }

  var deleteButton = document.getElementsByClassName("deleteButton");
  deleteButton.addEventListener("click", deleteCard);

}

var createButton = document.getElementById("createButton");
createButton.addEventListener("click", addCard);
