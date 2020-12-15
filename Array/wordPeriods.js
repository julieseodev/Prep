function wordPeriods(sentence) {
    // sentence = 'hello world'
    // sentence.split(' ') = ['hello', 'world']

    let words = sentence.split(' '); // ['hello', 'world']

    for (let i = 0; i < words.length; i++) {
        let word = words[i]; // 'hello'
        words[i] = word + '.'; // 'hello.'
    }

    // words = ['hello.', 'world.']
    return words.join(' ');
}

console.log(wordPeriods('hello world')) // 'hello. world.'
console.log(wordPeriods('what is the weather today')) // 'what. is. the. weather. today.'
