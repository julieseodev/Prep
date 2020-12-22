/*
    JavaScript Scope Rules

    1. Variables declared outside of functions are part of the global scope.
    2. Each function has it's own local scope.
    3. The var keyword will attach a variable to the current scope.
    4. An inner scope can access variables in a surrounding, outer scope. 
        But, an outer scope cannot access variables in an inner scope.
    5. When searching for a variable's value: JavaScript will search the current scope, 
        moving to outer scopes until it finds a matching variable declaration.
 */
let sentence = "hello this is scope notes";

function scopeNotes(string) {
    let sentence = "i'm inner scope";

    for (let i = 0; i < string.length; i++) {
        console.log(string[i]);
    }

    for (let i = string.length - 1; i >= 0; i--) {
        console.log(string[i]);
    }
    
    console.log(i)
}

function scopeNotes2() {
    console.log(sentence);
}

function scopeNotes3() {
    let name;

    if (true) {
        name = "Charlie";
    }

    console.log(name);
}

scopeNotes3()
