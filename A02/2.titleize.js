/*
    Write a function 'titleize(title, stopWords)' that takes in a string 'title'
    and an array of strings 'stopWords'. Return the 'title' where every word
    that does not exist in 'stopWords' array is capitalized. 
    All others lowercase.

    titleize("forest gump, the runner", ["the"]);
    "Forest Gump, the Runner"

    titleize("MASTER AND COMMANDER")
*/

function titleize(title, stopWords) {
    let sentence = title.split(' ');
    let result = [];
    for (i = 0; i < sentence.length; i++) {
        let word = sentence[i];
        if (stopWords.includes(word)) {
            result.push(word.toLowerCase());
        } else {
            result.push(word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase());
        }
    }
    return result.join(' '); 
}

console.log(titleize("forest gump, the runner", ["the"])); // "Forest Gump, the Runner"

// arr = ["peter", "david", "sarah"]
// arr.includes("peter")
// true
// arr.includes("john")
// false
// word = "david"
// arr.includes(word)
// true


// > str = "JULIE"
// 'JULIE'
// > str.slice(0)
// 'JULIE'
// > str.slice(1)
// 'ULIE'
// > str.slice(1,3)
// 'UL'