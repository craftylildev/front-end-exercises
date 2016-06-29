function showCarnivores (carnivores) {
  // List carnivores in DOM
  var outputCarnivores = document.getElementById("outputCarnivores");
  var outputString = "";
  for (var i = 0; i < carnivores.length; i++) {
    var currentCarnivore = carnivores[i];
    // build up DOM string
    outputString += `<p>${currentCarnivore.name}</p>`;
  }
  outputCarnivores.innerHTML = outputString;
}


function showHerbivores (herbivores) {
  var outputHerbivores = document.getElementById("outputHerbivores");
  var outputString = "";
  for (var i = 0; i < herbivores.length; i++) {
    var currentHerbivore = herbivores[i];
    outputString += `<p>${currentHerbivore.name}</p>`;
  }
  outputHerbivores.innerHTML = outputString;
}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);