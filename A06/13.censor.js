// Write a function censor(sentence, curseWords) that censors the given sentence by replacing the vowels in curse words with "". Assume no punctuation.

// Examples:
// var result1 = censor("Darn you Harold you son of a gun", "darn", "gun");
// result1; => "Drn you Harold you son of a gn"


// var result2 = censor("Schnikeys I dont give a diddly squat", "schnikeys", "diddly", "squat");
// result2; => "Schnkys I dont give a dddly sq**t"

function censor(sentence, curseWords) {
    let arr = sentence.split(' ');
    let newArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i].toLowerCase();
        if (curseWords.includes(word)) {
            newArr.push(removeVowels(arr[i]));
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr.join(' ');
}

function removeVowels(word) {
    let vowels = 'aeiou';
    let rest = "";
    for (let i = 0; i < word.length; i++) {
        if (!vowels.includes(word[i])) {
            rest += word[i];
        }
    }
    return rest;
}


console.log(censor("Darn you Harold you son of a gun", ["darn", "gun"])); // => "Drn you Harold you son of a gn"
console.log(censor("Schnikeys I dont give a diddly squat", ["schnikeys", "diddly", "squat"])); // => "Schnkys I dont give a dddly sq**t"

