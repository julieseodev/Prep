// data type
// number, boolean, string, null, undefined

// data structure: Array (ordered structure)
// [1,3,6,2,7,3,5]
// ['sam', 'ryan', 'brian']
// [true, false, false, true]
// [1, 'hi', 6, 'bye', true]



[1,3,6,2,7,3,5][2] // 6
let myNums = [1,3,6,2,7,3,5];
myNums[2]; // 6
myNums.push(100);
myNums; // [1,3,6,2,7,3,5,100]

['a', 'b', 'c'].indexOf('b') // 1
[1,2,3].unshift(100) // [100, 1, 2, 3]
[1,2,3].shift() // [2, 3]
[1,2,3].push(100) // [1, 2, 3, 100]
[1,2,3].pop() // [1, 2]
[1,2,3].concat([4, 5]) // [1,2,3,4,5]
[1,2,3,4,5,6,7].slice(startIndex, endIndex) 
// startIndex: inclusive
// endIndex: exclusive
[1,2,3,4,5,6,7].slice(2, 5) // [3,4]
[1,2,3].length // 3




// wordPeriods