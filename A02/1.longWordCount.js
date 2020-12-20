/* 
    Write a function 'longWordCount(string)' that takes in a string
    and returns the number of words that are longer than 7 characters.

    longWordCount("") // => 0
    longWordCount("short words only") // => 0
    longWordCount("one reallylong word") // => 1
    longWordCount("allwordword longwordword wordwordword") // => 3
*/


function longWordCount(string) {
    let wordCount = 0;
    let words = string.split(' ');     //[]

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (word.length > 7) {
            wordCount += 1;
        }
    }
    
    return wordCount;
}
console.log(longWordCount("short words only")); // => 0
console.log(longWordCount("one reallylong word")); // => 1
console.log(longWordCount("allwordword longwordword wordwordword")); // => 3