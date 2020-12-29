/******************************************************************
Write a function moreDotLessDash(str) that takes in a string 
and returns the true if the string contains more dots ('.') 
than dashes ('-'), false otherwise.


Examples:
moreDotLessDash('2-D arrays are fun. I think.'); => true
moreDotLessDash('.-.-.'); => true
moreDotLessDash('.-'); => false
moreDotLessDash('..--'); => false
********************************************************************/

function moreDotLessDash(str) {
    let dotCount = 0;
    let dashCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '.') {
            dotCount += 1;
        } else if (str[i] === '-') {
            dashCount += 1;
        }
    }
    return (dotCount > dashCount);
}

console.log(moreDotLessDash('2-D arrays are fun. I think.')); // => true
console.log(moreDotLessDash('.-.-.')); // => true
console.log(moreDotLessDash('.-')); // => false
console.log(moreDotLessDash('..--')); // => false