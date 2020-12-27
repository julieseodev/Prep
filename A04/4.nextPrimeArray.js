/*******************************************************************************
Write a function nextPrimeArray(array) that takes in an array of numbers.
The function should return a new array where each prime number is replaced
with the prime number that come next sequentially. For example the prime number
that comes after 5 is 7.

Examples:

nextPrimeArray([-4, 2, 5, 4, 11]) => [ -4, 3, 7, 4, 13 ]
nextPrimeArray([9, 13, 5, 6]) => [ 9, 17, 7, 6 ]
nextPrimeArray([]) => []
*******************************************************************************/

function nextPrimeArray(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (isPrime(array[i])) {
      newArray.push(nextPrime(array[i]));
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

function nextPrime(num) {
  for (let i = num + 1; true; i++) {
    if (isPrime(i)) { // 프라임이면
      return i; // i를 리턴해라
    }
  }
                // 여긴 뭐 할게 없어 sooner or later you'll have a prime number to return 
}

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(nextPrimeArray([-4, 2, 5, 4, 11])); // => [ -4, 3, 7, 4, 13 ]
console.log(nextPrimeArray([9, 13, 5, 6])); // => [ 9, 17, 7, 6 ]
console.log(nextPrimeArray([])); // => []