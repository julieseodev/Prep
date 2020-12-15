// take 2 numbers as input (start, end) 
// start = 4, end = 8 inclusive 
// start = 100, end = 105
// return [4,5,6,7,8]


function range(start, end) { // start = 4, end = 8
    let array = [];
    for (let i = start; i <= end; i++) {
        // i = 4
        // i = 5
        // i = 6
        // i = 7
        // i = 8
        array.push(i);
    }
    return array;
} 

console.log(range(4, 8)) // [4,5,6,7,8]
console.log(range(5, 9)) // [5,6,7,8,9]
console.log(range(100, 103)) // [100, 101, 102, 103]
