/*******************************************************************************
Write a function previousPrimeArray(array) that takes in an array of numbers.
The function should a return a new array where each prime number is replaced
with the prime number that comes before it. For example the prime number that comes
before 7 is 5.

Examples:

previousPrimeArray([10, 12, 11, 7, 16]); // => [ 10, 12, 7, 5, 16 ]
previousPrimeArray([17, 24, 29, 5, 2, 4]); // => [ 13, 24, 23, 3, null, 4 ]
*******************************************************************************/

function previousPrimeArray(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (isPrime(array[i])) {
      arr.push(previousPrime(array[i]));
    } else {
      arr.push(array[i]);
    }
  }
  return arr;
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


function previousPrime(num) {
  //   // check if there are any primes smaller than num
  //   for (let i = num - 1; i >= 2; i--) {
    //     if (isPrime(i)) {
      //       // return previous prime if exists
      //       return i;
      //     }
      //   }
      
      //   // for loop will end if no previous prime is found. so return null
      //   return null; 
      // }
      
      
  // only time there will be no previous prime of num is when num is 2
  // so, if current num is 2, return null before doing anything
  if (num === 2) {
    return null;
  }

  // look for a prime smaller than num
  for (let i = num - 1; i >= 2; i--) {
    if (isPrime(i)) {
      // return previous prime 
      return i;
    }
  }
}

console.log(previousPrimeArray([10, 12, 11, 7, 16])); // => [ 10, 12, 7, 5, 16 ]
console.log(previousPrimeArray([17, 24, 29, 5, 2, 4])); // => [ 13, 24, 23, 3, null, 4 ]