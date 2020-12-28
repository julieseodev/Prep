// Write a function reverseString(string) that takes in a string as a parameter and returns the string reversed. Do this recursively. You should not use the array.reverse method.


// Examples:
// reverseString('bootcamp'); // => 'pmactoob'
// reverseString('app academy'); // => 'ymedaca ppa'
// reverseString(''); // => ''

// function reverseString(string) {
//     if (string === '') {
//         return '';
//     } else {
//         let reversed = reverseString(string.slice(1)) + string[0];
//         return reversed;
//     }
// }

function reverseString(string) {
    if (string === '') {
        return '';
    } else {
        let firstChar = string[0];
        let rest = string.slice(1);
        let reversed = reverseString(rest) + firstChar;
        return reversed;
    }
}


console.log(reverseString('bootcamp')); // => 'pmactoob'
console.log(reverseString('app academy')); // => 'ymedaca ppa'
console.log(reverseString('')); // => ''