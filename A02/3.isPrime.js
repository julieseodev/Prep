/*
    Write a function 'isPrime(number)' that returns true if the number is a prime number,
    or return false if the number is not a prime number.

    isPrime(3) // => true
    isPrime(5) // => true
    isPrime(8) // => false
    isPrime(9) // => false
    isPrime(11) // => true

*/

function isPrime(number) {
   if (number < 2) {
       return false;
   }
   for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
   }
   return true;
}

console.log(isPrime(8)); // false
console.log(isPrime(2)); // true




// if (number < 2) {
//     return false;
// } 
// for (let i = 2; i < number; i++) { // 2 부터 number 바로 전까지 숫자들 중에 나눠지는게 있나 쳌
//     if (number % i === 0) {
//         return false;
//     }
// }
// // if neither of above are not false, then must be a prime number
// return true;