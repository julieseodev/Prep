/*******************************************************************************
Write a function valueConcat(array, obj) that takes in an array and object
The function should return a new array where each element is concatenated with
it's corresponding value from the object.

Examples:

valueConcat(['alex', 'maurice', 'meagan', 'ali'], {alex: 'bronca', ali: 'harris'})
=> [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

valueConcat(['a', 'b', 'c'], {b: 2, c: 3})
=> [ 'a', 'b2', 'c3' ]
*******************************************************************************/

function valueConcat(array, obj) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let name = array[i];
        if (obj[name] !== undefined) {
            newArray.push(name + obj[name]);
        } if (obj[name] === undefined) {
            newArray.push(name);
        }
    }
    return newArray;
}


console.log(valueConcat(['alex', 'maurice', 'meagan', 'ali'], {alex: 'bronca', ali: 'harris'})); 
// => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

console.log(valueConcat(['a', 'b', 'c'], {b: 2, c: 3}));
// => [ 'a', 'b2', 'c3' ]