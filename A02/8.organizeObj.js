function organizeObj(members) {
    let arr = [];
    for (let name in members) {
        let i = members[name] - 1;
        arr[i] = name;
    }
    return arr;
}


let members = {
    'Paul': 5,
    'Dave': 3,
    'Kate': 1,
    'Debbie': 2,
    'Joe': 6,
    'Karen': 4,
    'Emma': 7
}

console.log(organizeObj(members)); // ['Kate', 'Debbie', 'Dave', 'Karen', 'Paul', 'Joe', 'Emma']
