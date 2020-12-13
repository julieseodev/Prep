// data types
// ----------
// numbers
const age = 35;

// strings (text)
const name = "Sarah";

// boolean (true or false)
const hasACar = true;

// undefined
const banana;

// null
const banana = null;




// for readability, try to follow the style
// #1
function functionName() {

}


// #2 (newer)
const functionName = () => {

}



// variable
// you can declare a variable
const name;
let name;

// you can define a variable
name = 'Julie';

const name = 'Julie'; // once assigned, cannot change the value
let name = 'Julie'; // you can change the value


let age;
age = 35;
age = 36;
age = 37;
console.log(age); // 37

const age2 = 35;


// string
"bootcamp".length // 8
"bootcamp".toUpperCase() // 'BOOTCAMP'
"BOOTcaMP".toLowerCase() // 'bootcamp'
"bootcamp"[3] // 't'
"bootcamp".indexOf("t") // 3

let word = "bootcamp";
word.toUpperCase() // 'BOOTCAMP'
word[3] // 't'





// boolean (true / false)

// and && (both need to be true, in order to be true)
true && true // true
true && false // false
false && true // false
false && false // false

// or || (at least one is true, then true)
true || true // true
true || false // true
false || true // true
false || false // false



// conditional
if (condition) {
    //do some code...
} else {
    //do some other code...
}


if (condition1) {
    //do something...
} else if (condition2) {
    //do something else...
} else if (condition3) {
    //do something else...
} else {
    //do something if none of the conditions above are true
}
