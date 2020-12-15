// takes in an array of words 
// returns a new array where every word is capitalized

// function capWords(array) { // ['wOrD', 'cApTain', 'leMon']
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         newArray.push(array[i].toUpperCase());
//     }
//     return newArray;
// }

function capWords(array) { // ['wOrD', 'cApTain', 'leMon']
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let newWord = array[i].toUpperCase();
        newArray.push(newWord);
    }
    return newArray;
}

// ['WORD', 'CAPTAIN', 'LEMON']

console.log(capWords(['wOrD', 'cApTain', 'leMon'])); // ['WORD', 'CAPTAIN', 'LEMON']
console.log(capWords(['BaNana', 'cherry'])); // ['BANANA', 'CHERRY']
