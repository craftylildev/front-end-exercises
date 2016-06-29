/*Write a program that will convert a dollar amount to the number of coins that make up the amount. Use the common American coins of quarters, dimes, nickels, and pennies.*/

/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

function coinCounter () {
  // Initialize a JavaScript object to hold the coins

  var amount = document.getElementById("dollarAmt").value; 

  //* empty object to fill after input filled withe value
  var coinPurse = {};

  //* divides input by .25 to get # of quarters
  coinPurse.quarters = Math.floor(amount/.25);
  //* logs the about of quarters
  console.log("amount quarters", coinPurse.quarters);
  //* takes the remainder and sets it to only 2 decimal points
  var quartersRem = (amount%.25).toFixed(2);  
  //* logs remainder number
  console.log("rem amount quarters", quartersRem);

  coinPurse.dimes = Math.floor(quartersRem/.1);
  console.log("amount dimes", coinPurse.dimes);
  var dimesRem = (quartersRem%.1).toFixed(2);  
  console.log("rem amount dimes", dimesRem);

  coinPurse.nickels = Math.floor(dimesRem/.05);
  console.log("amount nickels", coinPurse.nickels);
  var nickelsRem = (dimesRem%.05).toFixed(2);  
  console.log("rem amount nickels", nickelsRem);

  coinPurse.pennies = Math.floor(nickelsRem/.01);
  console.log("amount pennies", coinPurse.pennies);

  return coinPurse;
}

var coins = coinCounter();
console.log();

//* finds button with ID of coinBtn
var converter = document.getElementById("coinBtn");
//* runs coinCounter function
converter.addEventListener("click", coinCounter);

//* function created to set empty string for the value of the coins mount input
function clearButton () {
  document.getElementById("dollarAmt").value = ""; 
}

//* finds button with correct ID 
var clear = document.getElementById("clearBtn");
//* clears input value
clear.addEventListener("click", clearButton);