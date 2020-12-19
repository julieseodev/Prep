let arr = ['a', 'b', 'c', 'd'];

// loop
for (let i = 0; i < arr.length; i++) {

}

// nested loop
function getPairs(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) { // outer loop
        // i = 0
        for (let j = 0; j < arr.length; j++) { // inner loop
            // j = 0
            result.push([arr[i], arr[j]]);
        }
    }
    return result;
}

// console.log(getPairs(arr)) // [ ['a', 'a'], ['a', 'b'],  ]










// substring
function substrings(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            arr.push(str.slice(i, j + 1));
        }
    }
    return arr;
}

// let str = 'benjamin'
// str.slice(0, 0)
// str.slice(i, )

let str = "abcd";
console.log(substrings(str));

// expected: ["a", "ab", "abc", "abcd", "b", "bc", "bcd", "c", "cd", "d"]
//              0    01   012    0123    1     12    123   2    23     3   
// i/j        i/j+1  
// start/end   0/1  0/2   0/3    0/4    1/2   1/3    1/4   2/3   2/4   3/4


/*
    i   j
    0   0
        1
        2
        3
    1   0
        1
        2
        3
    2   0
        1
        2
        3
    3   0
        1
        2
        3 
 */
