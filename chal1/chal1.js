// Challenge #1
// What is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder?

// numerator / denominator = quotient.remainder

// findNumber = function () {
//   for (var i = 1; i < 1000000; i++) { // checks all numerators from 1 - a million

//     for (var j = 1; j <= 10; j++) { // checks all denominators 1 - 10

//       if (i%j !== 0) {
//         break;
//       } 
//     }
//       console.log("i", i);
//       return i;
//   }
// };

// findNumber();
 
for (var i = 1; i < 1000000; i++) { // checks all numerators from 1 - a million

 if (i%10 === 0 && i%9 === 0 && i%8 === 0 && i%7 === 0 && i%6 === 0 && i%5 === 0 && i%4 === 0 && i%3 === 0 && i%2 === 0 && i%1 === 0) { // checks numerator against all denominators with remainders of 0
    console.log("i", i); // logs to console
    break; // breaks loop
 }
}

// for (var n = 1; n <= 10; n++) { // loop thru numbers 0 - 10, the first number in division
//   numerator = n;

//   for (var d = 1; d <= 10; d++){
//     denominator = d;
    
//     if (n >= d) {
//     console.log("nums", n, d);  
//     var findInteger = n%d;

//       if (findInteger === 0) {
//         console.log("findInteger", findInteger);
//       }
    
//     }
//   }
// }

