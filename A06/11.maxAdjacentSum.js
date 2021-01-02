// Write a function maxAdjacentSum(array) that takes in an array of numbers and returns the maximum sum of adjacent numbers in the array.
// HINT: First think how we can find adjacent elements in an array!


function maxAdjacentSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] + array[i + 1] > sum) {
            sum = array[i] + array[i + 1];
        }
    }
    return sum;
}

var arr1 = [5, 6, 11, 3];
console.log(maxAdjacentSum(arr1)); // => 17


var arr2 = [3, 2, 13, 5, 4, 7];
console.log(maxAdjacentSum(arr2)); // => 18