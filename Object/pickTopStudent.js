function pickTopStudent(grades) {
    // obj[key]
    // obj[key] = value
    
    let stats = {}; // { sarah: 387, thomas: 32350, .... }

    for (let i = 0; i < grades.length; i++) {
        let gradeArr = grades[i];
        let name = gradeArr[0];
        let score = gradeArr[1];
        
        if (stats[name] === undefined) {
            stats[name] = score;
        } else {
            stats[name] += score;
        }
    }

    let max = -Infinity;
    let topStudent = ""; 

    for (let key in stats) {
        if (stats[key] > max) {
            max = stats[key];
            topStudent = key; 
        }
    }
    return topStudent;
}

let scores = [
    ['Sarah', 32], 
    ['Sarah', 41], 
    ['Thomas', 98], 
    ['Jennie', 98],
    ['Donald', 98],
    ['Biden', 38],
    ['Thomas', 98],
    ['Biden', 18],
    ['Donald', 73],
    ['Jennie', 19],
    ['Julie', 12309],
]

console.log(pickTopStudent(scores)) // 'Julie'
