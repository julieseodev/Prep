/*******************************************************************************
Write a function range(start, end) that returns an array that contains all
numbers between 'start' and 'end' in sequential order.

Examples:

range(1,4) => [1,2,3,4]
range(4,2) => []
*******************************************************************************/

function range(start, end) {
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i); 
    }
    return arr;
}

console.log(range(1,4));
console.log(range(4,2));
