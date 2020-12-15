// #1
function addNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
}

// #2
const addNumbers = (num1, num2, num3) => {
    return num1 + num2 + num3;
}

console.log(addNumbers(9, 9, 9))
let sum = addNumbers(9, 9, 9)
console.log(addNumbers(sum, sum, sum))
