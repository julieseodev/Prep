// input is an array of numbers 
// returns the sum of all the elements

const sumArray = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(sumArray([1,2,5,-3])) // 5
console.log(sumArray([3,2,5,1,1,1])) // 13
console.log(sumArray([10,2,5])) // 17
