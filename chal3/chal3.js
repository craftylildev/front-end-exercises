// What is the difference between the sum of the squares of the first ten natural numbers, and the square of the sum of the first ten natural numbers?

//   sum of the squares 1 thru 10
// - square of the sum  1 thru 10

var num1 = 0;
var num2 = 0;

for (var i = 1; i <= 10; i++) {
  num1 += Math.pow(i, 2);
}
console.log("num1", num1);

for (var j = 1; j <=10; j++) {
  num2 += j; 
}

num2 = Math.pow(num2, 2);
console.log("num2", num2);

console.log("answer: ", num1 - num2);
