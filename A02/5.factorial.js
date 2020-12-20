/*
    Write a function 'factorial(n)' that returns the factorial of number 'n'.

    factorial(5) // => 5 * 4 * 3 * 2 * 1 => 120
    factorial(4) // => 4 * 3 * 2 * 1 => 24 
*/


function factorial(n) {
    let result = 1;
    for (let i = n; i >= 1; i--) {
        result = result * i;
    }
    return result;
}

console.log(factorial(5)); 
console.log(factorial(4));
