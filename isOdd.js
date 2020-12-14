// function isOdd(num) {
//     // if (condition) {
//     //     //do some code...
//     // } else {
//     //     //do some other code...
//     // }
    
//     if (num % 2 === 1) {
//         return true;
//     } else {
//         return false; 
//     }
// }

// ES6 version
const isOdd = (num) => {
    if (num % 2 === 1) {
        return true;
    } else {
        return false;
    }
}

console.log(isOdd(5)); // true
console.log(isOdd(9)); // true
console.log(isOdd(10)); // false 