//Exercise 2
/* //UNCOMMENT HERE
//Requirements
// The years of construction should be stored in the Roman number system
// The software module must be able to handle years from A to B (inclusive)

// Important
// There is no "year 0"
// The first year is 753BC because it is 1 AUC aka the foundation of Rome
// AUC: Ab Urbe Condita, "From the founding of the city"
// Final goal
// How many symbols he needs to set aside for each year number field in the database?
// Determine the minimal number of characters sufficient for storing any year number in the range from A to B.

//Input example
// 1BC-1AD

753 BC = 1 AUC = I
1 BC = 753 AUC = DCCLIII
1 AD = 754 AUC = DCCLIV

//prompt("The range of dates is from 753BC onwards")
//number + x = 754
//x = 754 - number

//Considerations
//The input from the user will be as required by the instructions
//*********************************************STEP 1: TEXT TO AUC****************************************************************
function BCtoAUC(number) {
  number = 754 - number;
  return number
}
function ADtoAUC(number) {
  number += 753;
  return number
}

const limits = [];
//console.log(text = "2000AD-2012AD");
let text = prompt("Enter the range of year A to B in the correct form");
const myArray = text.split("-");
for (let i = 0; i < 2; i++) {
  let myArray2 = myArray[i].split("B"); //0
  if (myArray2[1] === "C") {
    const numberAUC = BCtoAUC(myArray2[0]);
    //console.log(numberAUC); //first number, if it is BC
    limits.push(numberAUC);
  } else {
    myArray2 = myArray[i].split("A");
    const numberAUC = ADtoAUC(Number(myArray2[0]));
    //console.log(numberAUC);
    limits.push(numberAUC);
  }
}

//*********************************************STEP 2: TEXT TO ROMAN****************************************************************

function decimalToRoman(num) {
  var lookup = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }, roman = '', i;
  for (i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

//*********************************************STEP 3: ITERATION FROM A TO B****************************************************************
const A = limits[0];
const B = limits[1];

//console.log("The range is:", A, "to", B);

let romanLength = 0;
let maxLength = 0;

for (i = A; i <= B; i++) {
  romanLength = decimalToRoman(i).length;
  if (romanLength > maxLength) {
    maxLength = romanLength;
  }
}
//console.log(`The minimun number of characters required for the entered range, is: ${maxLength}`);
console.log(maxLength);

*/
