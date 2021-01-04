// Write a function isUniqueAnagram(word1, word2) that takes in two strings. 
// The function should return true if the strings are anagrams of each other, false otherwise. 
// Anagrams are strings that contain the same characters, but not necessarily in the same order. 
// Assume there will be no repeated characters in each input string.

function isUniqueAnagram(word1, word2) {
    let obj = {};
    for (let i = 0; i < word1.length; i++) {
        let char1 = word1[i];
        if (obj[char1] === undefined) {
            obj[char1] = 1;
        } else {
            obj[char1] += 1;
        }
    }
    for (let i = 0; i < word2.length; i++) {
        let char2 = word2[i];
        if (obj[char2] >= 1) {
            obj[char2] -= 1;
        } else {
            return false;
        }
    }
    for (let char in obj) {
        if (obj[char] !== 0) {
            return false;
        }
    }
    return true;
}


console.log(isUniqueAnagram('iceman', 'cinema')); // => true
console.log(isUniqueAnagram('abcd', 'adcb')); // => true
console.log(isUniqueAnagram('abcd', 'adxb')); // => false
console.log(isUniqueAnagram('abcd', 'abcdx')); // => false