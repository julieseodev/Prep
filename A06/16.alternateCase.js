// Write a function alternateCase(str) that takes in a word and returns the word where the characters alternate between uppercase and lowercase.


// Examples:
// alternateCase('BOOTCAMPPREP'); => 'BoOtCaMpPrEp'
// alternateCase('bOotCamPpREP'); => 'BoOtCaMpPrEp'
// alternateCase('hello'); => 'HeLlO'

function alternateCase(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (i === 0 || isEven(i)) {
            newStr += str[i].toUpperCase();
        } else {
            newStr += str[i].toLowerCase();
        }
    }
    return newStr;
}

function isEven(num) {
    return num % 2 === 0;
}


console.log(alternateCase('BOOTCAMPPREP')); // => 'BoOtCaMpPrEp'
console.log(alternateCase('bOotCamPpREP')); // => 'BoOtCaMpPrEp'
console.log(alternateCase('hello')); // => 'HeLlO'