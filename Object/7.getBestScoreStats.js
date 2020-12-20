// obj[key] 
// obj[key] = value 

function getBestScoreStats(students) {
    let obj = {}; // { jennie: [35]}

    for (let i = 0; i < students.length; i++) {
        let student = students[i];
        let studentName = student[0];
        let studentScore = student[1];

        // console.log('student', student)
        // console.log('studentName', studentName)
        // console.log('studentScore', studentScore)
        // console.log('-------------------')
        
        // obj['Jennie'] => undefined
        if (obj[studentName] === undefined) {
            obj[studentName] = [studentScore]; // jennie: [35]
        } else {
            // jennie의 [35].push(98)
            obj[studentName].push(studentScore);
        }
    }

    // console.log('obj', obj);
    // obj = {
    //     Jennie: [ 35, 98, 71, 93 ],
    //     Lisa: [ 28, 54 ],
    //     Rose: [ 82, 79 ],
    //     Jisoo: [ 88, 62 ]
    // }

    // { 'Jennie': 98, 'Lisa': 54, 'Rose': 82, 'Jisoo': 88 }

    let result = {};
    for (let name in obj) {
        // jennie -> lisa -> rose -> jisoo
        // jennie's turn
        // name  = 'Jennie'
        let scores = obj[name]; // [ 35, 98, 71, 93 ]
        // console.log('scores', scores)
        // console.log('----------------')
        let max = -Infinity; // 98

        for (let i = 0; i < scores.length; i++) { // [ 35, 98, 71, 93 ]
            let score = scores[i];
            // if (score > max) {
            //     max = score;
            // }

            max = Math.max(max, score);
        }

        // still jennie's turn
        result[name] = max;
    }
    return result;
}


// { key: value }
// { jennie: [35, 98, 71, 93], lisa: [28, 54], .... }
// [98].push()

// jennie => [35, 98, 71, 93]  => jennie: 98
// lisa => 28, 54   => lisa: 54
// rose => 82, 79   => rose: 82
// jisoo => 88, 62  => jisoo: 88

let class1 = [
    ['Jennie', 35],
    ['Jennie', 98], 
    ['Lisa', 28], 
    ['Jennie', 71],
    ['Rose', 82],
    ['Jisoo', 88],
    ['Lisa', 54],
    ['Jisoo', 62],
    ['Rose', 79],
    ['Jennie', 93],
]

console.log(getBestScoreStats(class1)) // { 'Jennie': 98, 'Lisa': 54, 'Rose': 82, 'Jisoo': 88 }
