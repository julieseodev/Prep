function zipArray(arr1, arr2) {
    let newArray = [];
    for (let i = 0; i < arr1.length; i++) {
        newArray.push([arr1[i], arr2[i]]);
    }
    return newArray;
}

let a1 = ['a', 'b', 'c', 'd'];
let a2 = [10, 20, 30, 40];

console.log(zipArray(a1, a2)) // [['a', 10], ['b', 20], ['c', 30], ['d', 40]]
                                // 0  0        1  1        2   2     3   3 
