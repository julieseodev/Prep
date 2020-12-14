// input = 'benjamin'
// output = 'bnai'

function everyOtherChar(str) {

    let result = ""; 

    for (let i = 1; i < str.length; i += 2) {
        // i = 0, 2, 4, 6
        // str[i] = b, n, a, i
        result += str[i];
        // result = result + str[i]; same as above
    }

    return result;
}


console.log(everyOtherChar('benjamin')) // 'bnai' 'ejmn'
console.log(everyOtherChar('julie')) // 'jle' 'ui'
console.log(everyOtherChar('amazon')) // 'aao' 'mzn'
