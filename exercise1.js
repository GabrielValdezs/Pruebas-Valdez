//Exercise 1
//UNCOMMENT HERE
/* 
const arrayN = [];
const arrayM = [];
const results = [];

let testCases = Number(prompt(`Enter the number of test cases wanted.
It must be an integer value between 1 and 5000`));




if (testCases >= 1 && testCases <= 5000) {
  console.log("Inputs:");
  console.log(testCases);
  for (let i = 0; i <= testCases - 1; i++) {
    arrayN.push(Number(prompt(`Enter the number N of rows of the grid number ${i + 1}`)));
    while (arrayN[i] < 1 || arrayN[i] > 10 ** 9) {
      arrayN[i] = Number(prompt(`Your entry for the number N of rows of the grid number ${i + 1} was invalid. It must be between 1 and 10^9. Please retry:`));
    }
    arrayM.push(Number(prompt(`Enter the number M of columns of the grid ${i + 1}`)));
    while (arrayM[i] < 1 || arrayM[i] > 10 ** 9) {
      arrayM[i] = Number(prompt(`Your entry for the number M of columns of the grid number ${i + 1} was invalid. It must be between 1 and 10^9. Please retry:`));
    }
  }

  for (let i = 0; i <= testCases - 1; i++) {
    console.log(arrayN[i], arrayM[i]);
  }

  for (let i = 0; i <= testCases - 1; i++) {
    if (arrayN[i] <= arrayM[i]) {
      if (arrayN[i] % 2 == 0) {
        results.push("L");
      } else {
        results.push("R");
      }
    } else {
      if (arrayM[i] % 2 == 0) {
        results.push("U");
      } else {
        results.push("D");
      }
    }

  }
  console.log("Outputs:")
  for (let i = 0; i <= testCases - 1; i++) {
    console.log(results[i]);
  }
} else {
  console.log("Unvalid entry, please reload the page");
}
*/