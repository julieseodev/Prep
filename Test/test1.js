// #1
// input: a string ex) 'software'
// output: return the length of the input string

// input: anything
// data types: string, array, tree, ....

function stringLength(word) {
    return word.length;
}


// #2
// input: 'software', 4
// output: 't'

function getChar(str, i) {
    return str[i];
}


// #3
// input: 'patrick', 'dana', 'tYLeR'....
// output: return 'Hello, welcome to Instagram, PATRICK'

function greetUser(name) {
    return "Hello, welcome to Instagram, " + name.toUpperCase();
}

greetUser('patrick');


// #4
// input(string): 'visualstudio'
// output: 'vsasui' 

function skipChar(str) {
    // iterate through the string
    let output = "";
    for (let i = 0; i < str.length; i += 2) {
        // i = 0, 2, 4, 6,...
        output += str[i]; // v, s, a, s, u, i
    }
    return output;
}   




// #5
// input(string): 'display'
// output: 'dIsPlAy'

function changeWord(str) {
    let output = ""; // d
    for (let i = 0; i < str.length; i += 1) {
        if (i % 2 === 0) {
            output += str[i]; 
        } else {
            output += str[i].toUpperCase;
        }
    }
    return output;
}
