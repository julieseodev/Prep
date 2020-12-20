function valuePair(obj1, obj2, key) {
    let a = obj1[key];
    let b = obj2[key];
    return [a, b];

    // return [obj1[key], obj2[key]];
}

let object1 = { name: 'One', location: 'NY', age: 3 };
let object2 = { name: 'Two', location: 'SF' };

console.log(valuePair(object1, object2, 'location')); // ['NY', 'SF']
console.log(valuePair(object1, object2, 'name')); // ['One', 'Two']


// let a = 'hi'
// let b = 'bye'

// [a, b] => ['hi', 'bye']



// object는 key: value니까
// key 를 사용해서 object에서 value를 찾을 수 있는거야
