let friends = {
    friend1: {
        name: 'Tommy',
        age: 28,
        occupation: 'doctor'
    },
    friend2: {
        name: 'Joyce',
        age: 31,
        occupation: 'nurse'
    },
    friend3: {
        name: 'Brian',
        age: 25,
        occupation: 'student'
    },
    friend4: {
        name: { 'firstName': 'Wayne', 'lastName': 'Smith' }
    },
    sayHi: function() {
        console.log("Hi")
    }
}

// console.log(friends.friend4.name.firstName);
// console.log(friends['friend4']['name']['firstName']);

// friends['friend5'] === undefined;

// friends['friend5'] = {};
// friends['friend5']['name'] = 'Daniel';
// friends['friend5']['age'] = 10;
// friends['friend5']['occupation'] = 'student';

// console.log(friends);

// console.log(friends['sayHi']);
friends.sayHi()
