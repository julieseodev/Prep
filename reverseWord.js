// input = "julie"
// output = "eiluj" 4,3,2,1,0

function reverseWord(str) {
    let output = "";
    for (let i = 0; i < str.length; i++) {
        // i = 0,1,2,3,4
        output = str[i] + output;
    }
    return output;
}

function reverseWord(str) {
    let output = "";
    for (let i = str.length - 1; i >= 0; i--) {
        // i = 4,3,2,1,0
        output = output + str[i];
    }
    return output;
}

function reverseWord(str) {
    let output = "";
    for (let i = 0; i < str.length; i++) {
        // i = 0,1,2,3,4
        // str.length - i
        // 4       -   0  = 4
        // 4       -   1  = 3
        // 4       -   2  = 2
        // 4       -   3  = 1
        // 4       -   4  = 0
        output += str[str.length - i];
    }
    return output;
}
