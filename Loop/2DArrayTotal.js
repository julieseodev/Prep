// write a function 'twoDimentionalArrayTotal(arr)'
// let arr = [[2,3,6],[3,4,2],[1,9,3]] => 33
// arr[0][0]
// arr[0][1]
// arr[0][2]
// arr[1][0]
// arr[1][1]
// arr[1][2]

function twoDimentionalArrayTotal(arr) {
    let total = 0;
    for (let row = 0; row < arr.length; row++) {
        for (let col= 0; col < arr.length; col++) {
            total += arr[row][col];
        }
    }
    return total;
}

console.log(twoDimentionalArrayTotal([[2,3,6],[3,4,2],[1,9,3]])); //33

/*
    2x3 matrix => 2 rows x 3 columns
    _____________
    |___|___|___|
    |___|___|___|
    
    matrix = [[2,3,6],[3,4,2]] 
    matrix[0] => [2,3,6]
        matrix[0][0] => 2
    matrix[1] => [3,4,2]
    [     0 1 2
       0 [2,3,6],
       1 [3,4,2]
    ]

    matrix[0][0] => 2
    matrix[0][1] => 3
*/
