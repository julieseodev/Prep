/*******************************************************************************
Write a function sum2Darray(array) that takes in a 2-Dimensional array of numbers.
The function should return the total sum of all numbers in the 2D array.

Examples:

var arr1 = [
  [1,2,3],
  [4,5],
  [6],
];
sum2DArray(arr1); // => 21

var arr2 = [
  [-10, 2, 3],
  [1],
  [10, -5],
  [2]
];
sum2DArray(arr2); // => 3
*******************************************************************************/

function sum2DArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let innerArray = array[i];
    for (let i = 0; i < innerArray.length; i++) {
      let num = innerArray[i];
      sum += num;
    }
  }
  return sum;
}

var arr1 = [
  [1,2,3],
  [4,5],
  [6],
];
console.log(sum2DArray(arr1)); // => 21

var arr2 = [
  [-10, 2, 3],
  [1],
  [10, -5],
  [2]
];
console.log(sum2DArray(arr2)); // => 3