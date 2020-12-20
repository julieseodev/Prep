function anagram(str1, str2) {
    let obj = {};
    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        if (obj[char] === undefined) {
            obj[char] = 1;
        } else {
            obj[char] += 1;
        }
    }
    
    for (let i = 0; i < str2.length; i++) {
        // 재료가 잇고 && 1개 이상 => deduct 1, move to next char
        // 재료가 아예 없는 케이스 => return false
        // 재료가 잇는데 0일경우 => return false
        
        if (obj[str2[i]] >= 1) {
            obj[str2[i]] -= 1;
        } else {
            return false;
        }
    }
    
    for (let key in obj) {
        if (obj[key] !== 0) {
            return false;
        }
    }

    return true;
}

console.log(anagram('race', 'care')) // true
console.log(anagram('racee', 'care')) // false
console.log(anagram('race', 'caree')) // false
console.log(anagram('part', 'trap')) // true
console.log(anagram('heart', 'earth')) // true
console.log(anagram('anagram', 'terminal')) // false
