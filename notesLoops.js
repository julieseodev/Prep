// i++
// i += 1
// i = i + 1


// print every number starting from 0 to 9
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
function printNums() {
    // for loop
    for (let i = 0; i < 10; i++) { // start, end, increment
        console.log(i); 
    }
}
printNums(); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9



function printNums(start, end) { // from start to end, end exclusive
    for (let i = start; i < end; i++) {
        console.log(i);
    }
}
printNums(0, 10); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
printNums(10, 20); // 10,11,12,13,14,15,16,17,18,19



// takes no input
// fixed function
// print every other number starting from 0 to 20
// 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
function printNums2() {
    for (let i = 0; i <= 20; i += 2) {
        console.log(i);
    }
}
printNums2();

// takes start, end variables as input
// print every other number starting from 'start', end at 'end'
function printNums2(start, end) {
    for (let i = start; i <= end; i += 2) {
        console.log(i);
    }
}
printNums2(0, 20)
printNums2(0, 13)
printNums2(4, 25)




function printCharacters(str) { // str = 'julie'
    for (let i = 0; i < str.length; i++) {
        // console.log(i); // 0,1,2,3,4
        console.log(str[i]); // 'j', 'u', 'l', 'i', 'e'
    }
}

// input: 'julie'
// output: 'J', 'U', 'L', 'I', 'E'
function printCharacters(str) { // str => 'julie'
    for (let i = 0; i < str.length; i++) {
        // i => 0 ~ 4
        console.log(str[i].toUpperCase())
    }
}
printCharacters('julie')



// write a function that adds every number from 'start' to 'end' (inclusive) and returns the total number
function addAllNumbers(start, end) { // start = 0, end = 20
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum = sum + i;
        // sum += i;
    }

    return sum;
}

function addAllNumbers(start, end) {
    let sum = 0;

    let i = start;
    while (i <= end) {
        sum += i;
        i++;
        // i += 1;
    }   

    return sum;
}
