function organizeObj(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let name = arr[i];
        obj[name] = i + 1;
    }
    return obj;
}


console.log(organizeObj(['Kate', 'Debbie', 'Dave', 'Karen', 'Paul', 'Joe', 'Emma'])); 
// {
//     'Paul': 5,
//     'Dave': 3,
//     'Kate': 1,
//     'Debbie': 2,
//     'Joe': 6,
//     'Karen': 4,
//     'Emma': 7
// }
