// #### Next Prime ####
// Given an array of numbers, replace each prime number in the array with
// the next prime number, e.g. 7 is replaced by 11.
//
// Constraint: You may not use a library to find prime numbers.
//
// examples:
// next_prime([11,13,17]) #=> [13, 17, 19]
// next_prime([4,6,8,10]) #=> [4,6,8,10]
// next_prime([2,5,4,7]) #=> [3,7,4,11]

function next_prime(arr) {  
    let newArr = [];
    
    for (let i = 0; i < arr.length; i++) { 
         if (isPrime(arr[i])) {
            newArr.push(nextPrime(arr[i]));
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function nextPrime(num) {
    for (let i = num + 1; true; i++) {
        if (isPrime(i)) {
            return i;
        }
    }
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

console.log(next_prime([11,13,17])) // #=> [13, 17, 19]
console.log(next_prime([4,6,8,10])) // #=> [4,6,8,10]
console.log(next_prime([2,5,4,7])) // #=> [3,7,4,11]