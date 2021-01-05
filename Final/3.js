/**************************************************************************************
Write a function `negativeSum` that takes in an array of numbers and returns a number
representing the sum of all negative numbers in the given array.

Examples:

negativeSum([-3, 12, -5, -2, 3]); // => -10
negativeSum([2, 1, 7]);           // => 0

Difficulty: Easy
*************************************************************************************/

function negativeSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        if (num < 0) {
            sum += num;
        }
    }
    return sum;
}

console.log(negativeSum([-3, 12, -5, -2, 3])); // => -10
console.log(negativeSum([2, 1, 7]));           // => 0