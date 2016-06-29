var outputEl = document.getElementById("output-target");

// section clicks
var articleEl = document.getElementsByClassName("article-section");
for (var i = 0; i < articleEl.length; i++) {
  articleEl.item(i).addEventListener("click", handleSectionClick);
  // console.log("articleEl", articleEl.item(i).innerHTML);

  function handleSectionClick() {
    // console.log("event", event);
    outputEl.innerHTML = "You clicked on the " + event.target.innerHTML + " section.";
    // console.log("inner", event.target.innerHTML);
  }
}


// h1 hover
var header = document.getElementById("page-title");

function handleHeaderMouseOver() {
  outputEl.innerHTML = "You moved your mouse over the header!";
}
header.addEventListener("mouseover", handleHeaderMouseOver);

function handleHeaderMouseOut() {
  outputEl.innerHTML = "You left me!!";
}

header.addEventListener("mouseout", handleHeaderMouseOut);


// keypress input
var fieldEl = document.getElementById("keypress-input");

fieldEl.addEventListener("keyup", function() {
  // console.log("value", fieldEl.value);
  outputEl.innerHTML = fieldEl.value;
});


// class changes
var guineaPig = document.getElementById("guinea-pig");

var addColor = document.getElementById("add-color");
addColor.addEventListener("click", function() {
  guineaPig.classList.toggle("blue");
});

var makeLarge = document.getElementById("make-large");
makeLarge.addEventListener("click", function() {
  guineaPig.classList.toggle("make-large");
});

var addBorder = document.getElementById("add-border");
addBorder.addEventListener("click", function() {
  guineaPig.classList.toggle("add-border");
});

var addRounding = document.getElementById("add-rounding");
addRounding.addEventListener("click", function() {
  guineaPig.classList.toggle("add-rounding");
});