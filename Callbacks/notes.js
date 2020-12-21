/*
    Callbacks
    1. A function can be used as an argument
    2. A function can return a function as a return value
*/

function callbackNotes(num1, num2, func) {
//    return func3("Charlie") + ". Answer to your functions are: " + (func1(2) + func2(4));
    return func(num1, num2)
}


function addTwoNums(num1, num2) {
    return num1 + num2;
}

function multiplyTwoNums(num1, num2) {
    return num1 * num2;
}

function sayHi(str) {
    return "Hello " + str;
}

