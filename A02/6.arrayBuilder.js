/*******************************************************************************
Write a function `arrayBuilder(count)` that takes in a count object and returns
an array filled with the appropriate numbers of elements. The order of
the elements in the array does not matter, but repeated elements should be
grouped.

Examples:

arrayBuilder({'cats': 2, 'dogs': 1}); //=> ['cats', 'cats', 'dogs']
arrayBuilder({'hi':3, 'bye':2}) //=> ['hi', 'hi', 'hi', 'bye', 'bye']
arrayBuilder({}); //=> []
*******************************************************************************/

function arrayBuilder(count) {
    // console.log(count)
    let arr = [];
    for (let key in count) {
        // key = 'cats'
        for (let i = 1; i <= count[key]; i++) {
            // console.log("key:", key)
            // console.log("value:", count[key])
            arr.push(key);
        }
    }   
    return arr;
}

console.log(arrayBuilder({ 'cats': 2, 'dogs': 1 })); //=> ['cats', 'cats', 'dogs']
console.log(arrayBuilder({ 'hi': 3, 'bye': 2 })); //=> ['hi', 'hi', 'hi', 'bye', 'bye']

