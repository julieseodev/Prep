/*******************************************************************************
Write a function laligatArray(array) that takes in an array of numbers and returns
a new array where each number is replaced with its laligat sum.

A number's laligat sum is the the sum of all the prime numbers less than or equal
to that number.

For example, the laligat sum of 10 is: 2 + 3 + 5 + 7 = 17

Examples:
laligatArray([10, 11, 20, 15]); // => [ 17, 28, 77, 41 ]
laligatArray([1, 2, 3, 4, 5]); // => [ 0, 2, 5, 5, 10 ]
*******************************************************************************/

function laligatArray(array) {
  let laligat = [];
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    for (let j = 2; j <= array[i]; j++) {
        if (isPrime(j)) {
        sum += j;
        laligat.push(sum);
        }  
    }
  }
  return laligat;
}
  

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
