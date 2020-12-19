// Write a function `pairZero(array)` that takes in an array of numbers as an argument
// and returns all pairs of numbers that sum to 0. Assume that all the numbers in
// the given array are unique. The function should return an array that contains
// pairs, a single pair is an array of length 2.
//
// Examples:
//
// pairZero([4, 1, 0]); // => []
// pairZero([1, 2, -1]); // => [ [ 1, -1 ] ]
// pairZero([0, 2, 5, -2, 7, -7]); // => [ [ 2, -2 ], [ 7, -7 ] ]

/*
    x + y === 0
    
*/

function pairZero(array) { 
    let arr = [];
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            let num1 = array[i];
            let num2 = array[j];
            if (num1 + num2 === 0) {
                arr.push([num1, num2]);
            }
        }
    }
    return arr;
}


console.log(pairZero([4, 1, 0])); // []
console.log(pairZero([1, 2, -1])); // [ [ 1, -1 ] ]
console.log(pairZero([0, 2, 5, -2, 7, -7])); // => [ [ 2, -2 ], [ 7, -7 ] ]

// () <- when invoking a function/method
// [] <- when indexing/keying an element in a string/array/object
// obj = { "name": "peter" }
// obj["name"] === "peter"
// arr = ["a", "b", "c"]
// arr[1] === "b"
// str = "hello"
// str[3] === "l"
// {} <- new block of function or statements or to notate objects

/*
    
    _____________
    |___|___|___|
    |___|___|___|
*/


