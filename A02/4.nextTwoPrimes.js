/*
    Write a function 'nextTwoPrimes(number)' that returns two primes greater than 'number'
    Let return two numbers in an array

    nextTwoPrimes(4) // => [5, 7]

    tip 1: write two separte functions
    tip 2: isPrime
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


function nextTwoPrimes(number) {
    let primes = []; // 이렇게 해놓고 이제 prime을 넣어야지 
    for (let i = number + 1; primes.length < 2 ; i++) { 
        if (isPrime(i)) { // prime 이 맞으면 true 아니면 false
            primes.push(i);
        }
    }
    return primes;
}

console.log(nextTwoPrimes(3)) // [5, 7]
console.log(nextTwoPrimes(10)) // [11, 13]
console.log(nextTwoPrimes(15)) // [17, 19]