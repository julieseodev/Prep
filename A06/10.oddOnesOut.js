// Write a function oddOnesOut(array) that takes in an array of strings and returns a new array array containing only elements that appeared an even number of times in the input array.


// Examples:
// var arr1 = ['a', 'b', 'b', 'c', 'd', 'c', 'c', 'd']
// oddOnesOut(arr1); =>  ['b', 'd'] 


// var arr2 = ['fish', 'fish', 'dog', 'cat', 'dog', 'dog']
// oddOnesOut(arr2); =>  ['fish'] 

function oddOnesOut(array) {
    let arr = [];
    let obj = {};
    for (let i = 0; i < array.length; i++) {
        let key = array[i];
        if (obj[key] === undefined) {
            obj[key] = 1;
        } else {
            obj[key] += 1;
        }
    }
    for (let ele in obj) {
        if (isEven(obj[ele])) {
            arr.push(ele);
        } 
    }
    return arr;
    
    
}


function isEven(num) {
    return num % 2 === 0;
}


var arr1 = ['a', 'b', 'b', 'c', 'd', 'c', 'c', 'd'];
console.log(oddOnesOut(arr1)); // =>  'b', 'd' 


var arr2 = ['fish', 'fish', 'dog', 'cat', 'dog', 'dog'];
console.log(oddOnesOut(arr2)); // =>  'fish' 


// console.log(isEven(5))