// write a function that adds every number from 'start' to 'end' (inclusive) and returns the total number

function addAllNumbers(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    } 
    return sum;
}

console.log(addAllNumbers(1, 4)); // 10
console.log(addAllNumbers(2, 5)); // 14