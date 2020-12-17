// Data Structure (where you can store different data types)
    // Array [element, element...] ex) [1, 'hi', true, false, null, undefined]  // arr[i]
        // square bracket with elements in it [ele, ele, ele...]
        // *** ordered
        
    // Object { key: value, ...} ex) { 'name': 'julie', 'age':21, 'gender': 'female' }
        // key-value pair
        // instead of indexing with numbers, objects are indexed with keys (which are always strings)
        // *** unordered
    
    // Stack []
    // Queue []
    // Set {}
    // Map {}
    // Tree 
    // Linked List 
    // Graph


        
// SQUARE BRACKET
let dog = { 'name':'Rover', 'type':'Husky', 'age':8 };
dog['name'] // 'Rover'
// console.log(dog['name'])
dog['type'] // 'Husky'
dog['age'] // 35

let arr = ['Fido', 'the Loyal'];
let obj = { 'name': 'Fido', 'title': 'the Loyal' };

// console.log(arr[0]);
// console.log(obj['name']);

arr.push(7);
obj['age'] = 7;


// console.log(arr[4]); // undefined
// console.log(obj['address']); // undefined

// console.log(dog['name'] === undefined) // false
// console.log(dog['city'] === undefined) // true

// DOT NOTATION
let dog2 = { 'name':'Peter', 'type':'Husky', 'age':8 };
// console.log(dog2.name) // 'Peter'










let myDog = {
    name: 'Fido',
    type: 'Doge',
    bark: 'Rawrrrr',
    age: 2,
    favoriteToys: ['bone', 'ball']
};

myDog.name; // 'Fido'
myDog['name']; // 'Fido'
myDog['favoriteToys']; // ['bone', 'ball']
myDog['favoriteToys'][1]; // 'ball'




function capitalizeName(name) {
    return name.toUpperCase();
}

let newName = capitalizeName(myDog.name) // 'FIDO'
let newToy = capitalizeName(myDog['favoriteToys'][1]) // 'BALL'
myDog['name'] = newName
myDog['favoriteToys'][1] = newToy


console.log(myDog)
// {
//     name: 'FIDO',
//     type: 'Doge',
//     bark: 'Rawrrrr',
//     age: 2,
//     favoriteToys: [ 'bone', 'BALL' ]
//}



// Existence check
let arr2 = ['Fido', 'the Loyal'];
let obj2 = { 'name': 'Fido', 'title': 'the Loyal' };

arr2.indexOf('Fido') // 0
arr2.indexOf('Sarah') // -1
arr2.includes('Fido') // true
arr2.includes('Sarah') // false

obj2['name'] // 'Fido'
obj2['name'] === 'Fido' // true
obj2['name'] === 'Sarah' // false
obj2['nickname'] // undefined
obj2['name'] === undefined // false
obj2['nickname'] === undefined // true



// time complexity
    // brute force
    // optimize (timely efficient)

