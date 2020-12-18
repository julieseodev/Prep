// Write a function 'adults(people)' that takes an array of person objects
// return an array containing the names of those who are 18+ years old

function adults(people) {
    let list = [];
    for (let i = 0; i < people.length; i++) {
        let person = people[i]; // { name: 'John', age: 30 }
        if (person['age'] >= 18) {
            list.push(person['name']);
        }
    }
    return list;
}

let ppl = [
    { name: 'John', age: 30 },
    { name: 'Jim', age: 23 },
    { name: 'Jane', age: 11 },
    { name: 'Bob', age: 45 },
    { name: 'Kate', age: 7 },
    { name: 'Peter', age: 18 }
]

console.log(adults(ppl)); // ['John', 'Jim', 'Bob', 'Peter']
