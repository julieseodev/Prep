let bootcamp = {
    // key: value
    name: 'Codecademy',
  
    founders: ['Hank', 'Nathan'],
  
    locations: ['SF', 'NY'],
  
    students: ['Tommy', 'Fred', 'Meagan', 'Alex'],
  
    population: 1000,

    enroll: function (studentName) {
        this.students.push(studentName);
        this.population += 1;
        return this.population;
    }
};

// console.log(bootcamp.students); // ['Tommy', 'Fred', 'Meagan', 'Alex']
// console.log(bootcamp.enroll('Donald')); 
// console.log(bootcamp.students); // ['Tommy', 'Fred', 'Meagan', 'Alex', 'Donald']


// Object methods
let keys = Object.keys(bootcamp); // [ 'name', 'founders', 'locations', 'students', 'population', 'enroll' ]
let values = Object.values(bootcamp); // [ 'Codecademy', ['Hank', 'Nathan'], ['SF', 'NY'], ['Tommy', 'Fred', 'Meagan', 'Alex'], 1000, function ]

let obj = {
    name: 'Sam',
    age: 25,
    gender: 'male'
}

for (let key in obj) {
    console.log(key); // 'name', 'age', 'gender'
}

for (let key in obj) { // iterating keys in the object
    console.log(obj[key]); // 'Sam', 25, 'male'
}

Object.keys(obj).forEach((key) => { // iterating the array of keys from the object

})

// [key, key, key...].forEach((key) => {
//
// })

// let keys = [key, key, key...];
// for (let i = 0; i < keys.length; i++) {
//
// }



for (let key in obj) {
    console.log(key + ": " + obj[key]);
    // name: Sam
    // age: 25
    // gender: male    
}

for (let key in obj) {
    console.log(key.toUpperCase() + ": " + obj[key]);
    // NAME: Sam
    // AGE: 25
    // GENDER: male 
}

for (let key in obj) {
    console.log(key[0].toUpperCase() + key.slice(1).toLowerCase() + ": " + obj[key]);
    // console.log(key.slice(0,1).toUpperCase() + key.slice(1).toLowerCase() + ": " + obj[key])

    // Name: Sam
    // Age: 25
    // Gender: male 
}


// > str = "JULIE"
// 'JULIE'
// > str.slice(0)
// 'JULIE'
// > str.slice(1)
// 'ULIE'
// > str.slice(1,3)
// 'UL'