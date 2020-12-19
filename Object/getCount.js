function getCount(myArray) {
    let obj = {}; // { 'a': 3, 'b': 2, 'c': 1, 'd': 1 } 
    for (let i = 0; i < myArray.length; i++) {
        let key = myArray[i];

        if (obj[key] === undefined) { // if key not in obj
            obj[key] = 1;
        } else { // if key in obj
            obj[key] += 1;
        }
    }
    return obj;
}

let myArray = ["a", "b", "a", "c", "a", "b", "d"];
console.log(getCount(myArray)); // { a : 3, b : 2, c : 1, d : 1 }

let students = ['Sarah', 'Roy', 'Chris', 'Sarah', 'Sarah', 'Chris'];
console.log(getCount(students)); // { 'Sarah': 3, 'Roy': 1, 'Chris': 2 }

// obj[key] = value // setting the value
// obj[key] // retrieving the value 
