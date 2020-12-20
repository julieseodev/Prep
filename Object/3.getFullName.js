// Write a function 'getFullName(person)' that takes an object
// returns a string containing their full name

// ex)
// let p1 = { firstName: 'John', lastName: 'Doe' };
// getFullName(p1); // 'John Doe'

// let p2 = { firstName: 'Sarah', lastName: 'Dimon' };
// getFullName(p2); // 'Sarah Dimon'

function getFullName(person) {
    return person['firstName'] + " " + person['lastName'];
}

let p1 = { firstName: 'John', lastName: 'Doe' }
console.log(getFullName(p1));
