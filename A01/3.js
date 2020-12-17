/******************************************************************************
Write a function unique(array) that returns an array where all the duplicates
of the input array have been removed; in other words, every element remaining
is unique.

Hint: use indexOf

Example:
unique([1, 1, 2, 3, 3]) => [1, 2, 3]
*******************************************************************************/

function unique(array) {
    // [1,2,3].indexOf(3) => 2
    // [1,2,3].indexOf(1) => 0
    // [1,2,3].indexOf(5) => -1

    let newArray = [];
    for (let i = 0; i < array.length; i++) { // [1,1,2,3,3]
        let num = array[i];
        if (newArray.indexOf(num) === -1) {
            newArray.push(num);
        }
    }
    return newArray;
}

console.log(unique([1,1,2,3,3])); // [1,2,3]
