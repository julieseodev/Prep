/*******************************************************************************
Write a function `hipsterfy(sentence)` that takes takes a string containing
several words as input. Remove the last vowel from each word. 'y' is not a vowel.

Examples:

hipsterfy("proper"); // => "propr"
hipsterfy("proper tonic panther"); // => "propr tonc panthr"
hipsterfy("towel flicker banana"); // => "towl flickr banan"
hipsterfy("runner anaconda"); // => "runnr anacond"
hipsterfy("turtle cheeseburger fries"); // => "turtl cheeseburgr fris"
*******************************************************************************/

function hipsterfy(sentence) {
    let arr = sentence.split(' ');
    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];
        arr[i] = removeLastVowel(ele);
    }
    return arr.join(' ');                   
}

// function removeLastVowel(word) {
//     let vowel = 'aeiou'; 
//     let result = "";
//     let haveWeFoundVowelYet = false; // initial value
//     for (let i = word.length - 1; i >= 0; i--) { // samsung gnusmas
//         let char = word[i];
//         if (vowel.indexOf(char) >= 0 && !haveWeFoundVowelYet) { // '!haveWeFoundVowelYet' is same as 'haveWeFoundVowelYet === false'
//         // !false === true
//             haveWeFoundVowelYet = true;
//             continue;
//         } else {
//             result = char + result;
//         }
//     }
//     return result;
// }

function removeLastVowel(word) { // samsung
    let vowel = "aeiou";
    // let vowels = new Set('aeiou');

    for (let i = word.length - 1; i >= 0; i--) {
        if (vowel.includes(word[i])) { // vowels.has(word[i])
            // i = 4, word[i] = u
            // sams + ng
            return word.slice(0, i) + word.slice(i + 1);
        }
    }
    return word;
}

// console.log(removeLastVowel('samsung')) // samsng

console.log(hipsterfy("proper")); // => "propr"
console.log(hipsterfy("proper tonic panther")); // => "propr tonc panthr"
console.log(hipsterfy("towel flicker banana")); // => "towl flickr banan"
console.log(hipsterfy("runner anaconda")); // => "runnr anacond"
console.log(hipsterfy("turtle cheeseburger fries")); // => "turtl cheeseburgr fris"


// function removeVowel(word) {
//     const vowels = 'aeiou';
//     // vowels.indexOf('b') => -1 => consonant
//     // vowels.indexOf('o') => 3 => vowel
//     // vowels.indexOf('p') => -1

//     let consonants = "";
//     for (let i = 0; i < word.length; i++) {
//         let char = word[i];
//         if (vowels.indexOf(char) < 0) { // if consonant
//             consonants += char;
//         }
//     }
//     return consonants;
// }



