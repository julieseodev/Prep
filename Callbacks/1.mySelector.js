/*******************************************************************************
Write a function mySelect(arr, cb) that accepts an array and a callback.
It should pass the callback every element, its corresponding index, and the array
itself. Returns an array containing all elements of `arr` for which the given callback
returns a truthy value.

Examples:

function isUpper(str) {
  return str.toUpperCase() === str;
}

function isEven(n) {
  return n % 2 === 0;
}

var result1 = mySelect(['BOOTCAMP', 'prep', 'iS', 'COOL'], isUpper);
result1; // => [ 'BOOTCAMP', 'COOL' ]

var result2 = mySelect([1, 2, 4, 7, 8], isEven);
result2; // => [ 2, 4, 8 ]
*******************************************************************************/

function mySelect(arr, cb) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];
        if (cb(ele, i, arr)) { // cb(arr[i]
          result.push(ele); // result.push(arr[i]);
        }
    }
    return result;
  }

function isUpper(str) {
  return str.toUpperCase() === str;
}
  
function isEven(n) {
  return n % 2 === 0;
}

console.log(mySelect(['BOOTCAMP', 'prep', 'iS', 'COOL'], isUpper)); // => [ 'BOOTCAMP', 'COOL' ]

console.log(mySelect([1, 2, 4, 7, 8], isEven)); // => [ 2, 4, 8 ]