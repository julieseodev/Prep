// Write a function 'threeOrSeven' that takes in a number and returns 'true' if the number is divisible by either 3 or 7 and 'false' otherwise.

// function threeOrSeven(num) {
//     if (num % 3 === 0) {
//         return true;
//     } else if (num % 7 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

const threeOrSeven = (num) => {
    if (num % 3 === 0) {
        return true;
    } else if (num % 7 === 0) {
        return true;
    } else {
        return false;
    }

}

console.log(threeOrSeven(30)); // true
console.log(threeOrSeven(100)); // false
console.log(threeOrSeven(77)); // true
