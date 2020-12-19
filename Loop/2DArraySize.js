function twoDimentionalSize(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].length;
    }
    return sum;
}

let arr = [[1,2,3], [4,5], [6,7,8,9]];
// arr.length // 3
console.log(twoDimentionalSize(arr)) // 9
