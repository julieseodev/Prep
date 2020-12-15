// input: [4,5,1,6]
// output: 4

function avgValue(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

console.log(avgValue([1,2,3,4,5])); // 3
console.log(avgValue([2,3,4,5,6])); // 4
