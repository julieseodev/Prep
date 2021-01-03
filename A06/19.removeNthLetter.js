// removeNthLetter(word, n) that takes in a string and an index n. The function should return that word with the character at index n removed.

function removeNthLetter(word, n) {
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
        if (i !== n) {
            newWord += word[i];
        }
    }
    return newWord;
}



console.log(removeNthLetter('bootcamp', 0)); // => 'ootcamp'
console.log(removeNthLetter('bootcamp', 6)); // => 'bootcap'
console.log(removeNthLetter('bootcamp', 4)); // => 'bootamp'
console.log(removeNthLetter('computer', 3)); // => 'comuter'