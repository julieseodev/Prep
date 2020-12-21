/*******************************************************************************
Write a function isPassing(assessments) that takes in an array of assessment objects.
The function should return a true if the average assessment score is at least 70.
It should return false otherwise.

Examples:

let assessments1 = [
  {number: 1, score: 60},
  {number: 2, score: 90},
  {number: 3, score: 80},
  {number: 4, score: 100},
  {number: 5, score: 85}
];

isPassing(assessments1) => true


let assessments2 = [
  {number: 1, score: 60},
  {number: 2, score: 20},
  {number: 3, score: 45}
];

isPassing(assessments2) => false
*******************************************************************************/

function isPassing(assessments) {
    let sum = 0;
    for (let i = 0; i < assessments.length; i++) {
        let assessment = assessments[i];
        let eachScore = assessment["score"];
        // let eachScore = assessment.score;

        sum += eachScore;
    }
    let avg = sum / assessments.length;
    // if (avg >= 70) {
    //     return true;
    // } else {
    //     return false;
    // }

    return avg >= 70;
}

let assessments1 = [
    {number: 1, score: 60},
    {number: 2, score: 90},
    {number: 3, score: 80},
    {number: 4, score: 100},
    {number: 5, score: 85}
  ];
  
  console.log(isPassing(assessments1)); // => true
  
  
  let assessments2 = [
    {number: 1, score: 60},
    {number: 2, score: 20},
    {number: 3, score: 45}
  ];
  
  console.log(isPassing(assessments2)); // => false