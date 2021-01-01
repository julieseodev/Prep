// Write a function toFeet(distances) that takes in an array of distance strings. The given distances will either be in feet or yards. The function should return a new array where all the distances are converted to feet. There are 3 feet in 1 yard.


// Examples:
// var arr1 = '10 feet', '3 yards', '5 yards', '3 feet';
// toFeet(arr1); =>  '10 feet', '9 feet', '15 feet', '3 feet' 


// var arr2 = '2 yards', '3 feet', '10 yards';
// toFeet(arr2); =>  '6 feet', '3 feet', '30 feet' 


function toFeet(distances) {
    let newArr = [];
    for (let i = 0; i < distances.length; i++) {
        // let distance = distances[i].split(' '); // arr
        let distance = distances[i];
        let distanceArr = distance.split(" ");
        if (distanceArr[1] === 'yards') {
            newArr.push(3 * distanceArr[0] + ' feet');
        } else {
            newArr.push(distances[i]);
        }    
    }
    return newArr;
}

var arr1 = ['10 feet', '3 yards', '5 yards', '3 feet'];
console.log(toFeet(arr1)); // => ['10 feet', '9 feet', '15 feet', '3 feet'] 


var arr2 = ['2 yards', '3 feet', '10 yards'];
console.log(toFeet(arr2)); // => ['6 feet', '3 feet', '30 feet'] 



