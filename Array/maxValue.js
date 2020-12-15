// input type: array ex) [12, 6, 43, 2]
// return 43

function maxValue(array) {
    let max = -Infinity;
    for (let i = 0; i < array.length; i++) {
        max = Math.max(max, array[i]);

        // if (max < array[i]) {
        //     max = array[i];
        // }
    }
    return max;
}

// Math.max(1, 2); => 2 
// Math.max(1, 2); => 2 
// Math.min(3, 2); => 2

console.log(maxValue([12,6,43,2])) // 43
console.log(maxValue([-5,6,43,2])) // 43
console.log(maxValue([-5,6,-43,2])) // 6
