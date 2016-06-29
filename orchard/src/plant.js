"use strict";

// Create a Plant function.
function Plant() { 
  this.height = 0;  // Plant should have a property of height.
};

// Create a Tree function.
function Tree () { 
  this.branches = 0;  // Tree should have a property of branches.
};
// Plant should be the prototype of Tree - - i want my tree's prototype to be a plant
Tree.prototype = new Plant();

// The Plant prototype should have two methods on it: increaseHeight and decreaseHeight. Each method should accept an integer value as input.

Plant.prototype.increaseHeight = function (growth) {
// increaseHeight should increase the value of the height property by the amount passed in as an argument.
  this.height += growth;
}

// decreaseHeight should decrease the value of the height property by the amount passed in as an argument.
Plant.prototype.decreaseHeight = function (trim) {
  this.height -= trim;
}

// The Tree prototype should have two methods on it: grow and trim.

// Each time the height of a tree increases by 10, the value of branch should increase by one.
Tree.prototype.grow = function (growth) { //adds branches AND increase height
// The grow method should accept an integer value as input.
// The grow method should increase the height of the tree.
  this.increaseHeight(growth);
  // console.log("this.height", this.height);
  this.branches = Math.floor(this.height / 10);
}

// When the trim method is called, the number of branches should decrease by one.
Tree.prototype.trim = function (trim) {
// The trim method should accept an integer value as input.
// The trim method should decrease the height of the tree.
  this.decreaseHeight(trim);
  this.branches--;
  console.log("this.branches", this.branches);
}

// Create a PearTree instance of Tree. var PearTree = new Tree();
var PearTree = new Tree();
PearTree.height = 0;
PearTree.branches = 0;
// console.log("PearTree", PearTree);

// Create an OakTree instance of Tree.
var OakTree = new Tree();
OakTree.height = 0;
OakTree.branches = 0;
// console.log("OakTree", OakTree);

var heightCounter = 0; //start counter at zero
var timesGrown = 1;
// setInterval(function () {}, rate);
var treeInterval = setInterval(function () {
  // Every second, increase the height the pear tree by some integer value and increase the height the oak tree by some integer value that is larger than what you used for the pear tree.
  PearTree.grow(3);
  OakTree.grow(7);
  heightCounter++;
  
  console.log("timesGrown", timesGrown);
  // Every tenth time the trees are grown, invoke the trim method. Pass one value to the method for the pear tree, and a larger value to the method on the oak tree.
  if (timesGrown === 10) {
    PearTree.trim(2);
    OakTree.trim(6);
    timesGrown = 1;
  } else {
    timesGrown++;
  }

  // Also output the current height of each tree and how many branches it has to the DOM.
  $("#output").append(
  `<p>PearTree is now ${PearTree.height} tall, and has ${PearTree.branches} branches.</p>
  <p>OakTree is now ${OakTree.height} tall, and has ${OakTree.branches} branches.</p>`
  );

  // Stop growing the trees after they have grown 30 times.
  if (heightCounter === 30) {
    clearInterval(treeInterval);
  }
}, 300); //

// console.log("PearTree", PearTree);
// console.log("OakTree", OakTree);
















// Each time the height of a tree increases by 10, the value of branch should increase by one.
// for (var i = 1; i <= 30; i++) {
//   PearTree.height++;
//   // OakTree.height++;
//   console.log("PearTree height", PearTree);
//   // console.log("Oaktree height", OakTree);
//   if (i % 10 === 0) {
//     PearTree.branches++;
//     // OakTree.branches++;
//     console.log("i", i);
//     console.log("pear branches", PearTree);
//     // console.log("oak branches", OakTree);
//   }
// }