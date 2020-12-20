/*******************************************************************************
Write a function longestWord(sentence) that returns the longest word of a sentence.
If there are ties, the function should return the later word.

Examples:

longestWord('coding school is cool'); // => 'school'
longestWord('hate having hungry hippos'); // => 'hippos'
longestWord('bootcamp'); // => 'bootcamp'
longestWord(''); // => ''
*******************************************************************************/

function longestWord(sentence) { // 'coding school is cool'
    let words = sentence.split(' '); // ['coding', 'school', 'is', 'cool']
    let longest = "";              
    for (let i = 0; i < words.length; i++) {  // i = 0,1,2,3
        let word = words[i]; // 'coding' 'school'
        if (word.length >= longest.length) { // 6 >= 6
            longest = word; // longest = 'school'
        }
    }   
    return longest;
}

console.log(longestWord('coding school is cool')); // => 'school'
console.log(longestWord('hate having hungry hippos')); // => 'hippos'
console.log(longestWord('bootcamp')); // => 'bootcamp'
console.log(longestWord('')); // ''
