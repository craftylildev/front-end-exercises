var Predator = (function () {
  var privateCarnivores = [];
  var privateHerbivores = [];

  return {
    loadCarnivores: function (callbackFunction) {
      var loader = new XMLHttpRequest();
      loader.addEventListener("load", function () {
        // Set the value of the private array
        privateCarnivores = JSON.parse(this.responseText).carnivores;
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
        callbackFunction(privateCarnivores);
      });
      loader.open("GET", "carnivores.json");
      loader.send();
    },
    loadHerbivores: function (callbackFunction) {
      var loader = new XMLHttpRequest();
      loader.addEventListener("load", function () {
        privateHerbivores = JSON.parse(this.responseText).herbivores;
        callbackFunction(privateHerbivores);
      });
      loader.open("GET", "herbivores.json");
      loader.send();
    }
  }
})();

