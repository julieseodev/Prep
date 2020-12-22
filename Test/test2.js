// #1 
// write a function that adds all nums from x to y (inclusive) and returns the sum
function sumNums(x, y) {
    let sum = 0;
    for (let i = x; i <= y; i++) {
        sum += i;
        // console.log('i', i)
        // console.log('sum', sum)
    }
    return sum;
}

console.log(sumNums(1, 3)); // 6
// console.log('-------------')
console.log(sumNums(2, 5)); // 14


// #2
// write a function 'isInside' that takes an array and an element
// returns true if element is inside the array and false if element is not inside the array
    // let arr = [1,2,3];
    // arr.indexOf(3) // 2
    // arr.indexOf(100) // -1

function isInside(arr, ele) { // [1,2,3], 3
    // if (arr.indexOf(ele) >= 0) {
    //     return true;
    // } else {
    //     return false;
    // }

    return arr.indexOf(ele) >= 0;
}
console.log(isInside([2,3,4,5], 4)); // true
console.log(isInside([9,3,4,5,1], 2)); // false


// #3
// write a function that takes a word and returns the reversed word
// 'bootcamp' -> 'pmactoob'

function reverseWord1(word) {
    let reversed = "";
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }
    return reversed;
}

function reverseWord2(word) { 
    let reversed = "";
    for (let i = 0; i < word.length; i++) {
        // i = 0,1,2,3,4,5,6,7
        reversed += word[word.length - 1 - i]
    }
    return reversed;
}

function reverseWord3(word) {
    let reversed = "";
    for (let i = 0; i < word.length; i++) {
        reversed += word[i] + reversed;
    }
    return reversed;
}

console.log(reverseWord2("strawberry")); // "yrrebwarts
console.log(reverseWord2("julie")); // "eiluj"


// #4
// write a function 'luckySevens(max)' 
// returns an array of all numbers from 1 up to max (inclusive) that are divisible by 7

//?????????????????????????????????????????

function luckySevens(max) {
    let result = [];
    for (let i = 1; i <= max; i++) {
        if (i % 7 === 0) {
            result.push(i);
        } 
    }
    return result;
}

console.log(luckySevens(15)); // [7,14]
console.log(luckySevens(22)); // [7,14,21]


// #5
// write a function 'copyMachine' that takes in element and number 
// returns an array of length 'num' that is filled with element
// ex) copyMachine('julie', 3) => ['julie', 'julie', 'julie']
// ex) copyMachine(11, 4) => [11, 11, 11, 11]

function copyMachine(ele, num) {
    let arr = [];
    for (let i = 0; i < num; i++) {     // for (let i = 1; i <= num; i++)
        // i = 0, 1, 2
        arr.push(ele);
    }
    return arr;
}

console.log(copyMachine('julie', 3)); // ['julie', 'julie', 'julie']
console.log(copyMachine('o', 4)); // ['o', 'o', 'o', 'o']



// #6
// write a function 'everyOtherWord' that takes a sentence
// returns an array containing every other word in that sentence
// ex) everyOtherWord('hello how are you doing on this lovely day') => ['hello', 'are', 'doing', 'this', 'day']
// ex) everyOtherWord('the weather is wonderful') => ['the', 'is']

function everyOtherWord(sentence) {
    let words = sentence.split(' '); 
    // words= ['hello', 'how', 'are', 'you', 'doing', 'on', 'this', 'lovely', 'day']
    
    let result = [];
    for (let i = 0; i < words.length; i += 2) {
        result.push(words[i]);
    }
    return result;
}

console.log(everyOtherWord('hello how are you doing on this lovely day'));



// #7
// write a function 'removeVowel' that takes a word
// returns a new word with all vowels removed
// ex) removeVowel('bootcamp') => 'btcmp'
// ex) removeVowel('julie') => 'jl'

function removeVowel(word) {
    const vowels = 'aeiou';
    // vowels.indexOf('b') => -1 => consonant
    // vowels.indexOf('o') => 3 => vowel
    // vowels.indexOf('p') => -1

    let consonants = "";
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (vowels.indexOf(char) < 0) {
            consonants += char;
        }
    }
    return consonants;
}

console.log(removeVowel('bootcamp')); // 'btcmp'
console.log(removeVowel('julie')); // 'jl'




// #8
// mirrorArray
// [1,2,3] => [1,2,3,3,2,1]
// ['a','b','c','d'] => ['a','b','c','d','d','c','b','a']

function mirrorArray(arr) {
    let copyArr = [...arr]; // [1,2,3]
    for (let i = arr.length - 1; i >= 0; i--) {
        copyArr.push(arr[i]);
    }
    return copyArr;
}

console.log(mirrorArray([1,2,3])); // [1,2,3,3,2,1]




// #9
// firstLastCap
// 'bootcamp' => 'BootcamP'
// 'julie' => 'JuliE'

function firstLastCap(word) {
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
        if (i === 0 || i === word.length -1) {
            newWord += word[i].toUpperCase();
        } else {
            newWord += word[i].toLowerCase();
        }
    }
    return newWord;
}

console.log(firstLastCap('bootcamp')) // 'BootcamP'
console.log(firstLastCap('BOOTCAMP')) // 'BootcamP'
console.log(firstLastCap('julie')) // 'JuliE'



// #10
// 'hello BOOTCAMP pREp' => 'HellO BootcamP PreP'
// 'what is on the radio' => 'WhaT IS ON ThE RadiO'

function recreateSentence(sentence) {
    let words = sentence.split(' '); // ['BootcamP', 'JuliE', ele, ele....]
    for (let i = 0; i < words.length; i++) {
        let word = words[i]; // 'bootcamp'
        let newWord = firstLastCap(word); // 'BootcamP'
        words[i] = newWord; // assigning with new value

        // words[i] = firstLastCap(words[i]);
    }
    return words.join(' '); 
}

console.log(recreateSentence('hello BOOTCAMP pREp')) // 'HellO BootcamP PreP'
console.log(recreateSentence('what is on the radio')) // 'WhaT IS ON ThE RadiO'

