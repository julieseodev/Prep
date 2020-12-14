/*
    Write a function 'whisper' that takes in a string and returns whispered version of the string.
    Ex) whisper("Hey Anthony") => "...hey anthony..."
    Ex) whisper("YEAH! THAT WAS FUN") => "...yeah! that was fun..."

*/

// function whisper(sentence) {
//     return "..." + sentence.toLowerCase() + "..." // ES5
//     // return '"...' + sentence.toLowerCase() + '..."'
// }

const whisper = (sentence) => {
    return `...${sentence.toLowerCase()}...` // ES6
}

console.log(whisper("HI PETER")); // "...hi peter..."
console.log(whisper("Hey Anthony")); // "...hey anthony..."
console.log(whisper("YEAH! THAT WAS FUN")); // "...yeah! that was fun..."
