/******************************************************************************
Write a function reverseSentence(sentence) that returns a string where all the
words in the input sentence are reversed. Don't use Array#reverse.

Examples:

reverseSentence("Go to the store") => "store the to Go"
reverseSentence("Jump, jump for joy") => "joy for jump Jump,"
*******************************************************************************/

function reverseSentence(sentence) {
    // split (string => array)
    let words = sentence.split(' '); // ['Go', 'to', 'the', 'store']

    // let newSentence = ""; // 'storethetogo'
    let newSentence = []; // ['store', 'the', 'to', 'go']
    for (let i = words.length -1; i >= 0; i--) { // store, the, to, go
        newSentence.push(words[i]);
    }

    // join (array => string)
    return newSentence.join(' ');
}

console.log(reverseSentence("Go to the store")); 
console.log(reverseSentence("Jump, jump for joy"));
