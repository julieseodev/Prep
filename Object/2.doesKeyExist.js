// Write a function 'doesKeyExist(obj, key)' that takes in an object and a key
// returns true if the key is inside the object and false if the key is not inside the object

function doesKeyExist(obj, key) {
    // if (obj[key] === undefined) {
    //     return false;
    // } else {
    //     return true;
    // }

    return obj[key] !== undefined;
}

let obj1 = { bootcamp: 'Codecademy', course: 'Javascript' };
console.log(doesKeyExist(obj1, 'bootcamp')); // true
console.log(doesKeyExist(obj1, 'name')); // false 
