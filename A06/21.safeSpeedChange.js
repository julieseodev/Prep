// Write a function safeSpeedChange(speeds) that takes in an array of speed numbers. 
// The function should return true if consecutive speeds in the array differ by no more than 5, false otherwise.

function safeSpeedChange(speeds) {
    for (let i = 0; i < speeds.length - 1; i++) {
        if (speeds[i] - speeds[i + 1] > 5) { // let current = speeds[i], next = speeds[i + 1]
            return false;
        } else if (speeds[i] - speeds[i + 1] < -5) { // if (Math.abs(current - next) > 5)
            return false;
        }
    }
    return true;
}




console.log(safeSpeedChange([3, 3, 2, 6, 8, 7])); // => true
console.log(safeSpeedChange([3, 3, 2, 6, 12, 10])); // => false
console.log(safeSpeedChange([8, 10, 4, 3, 2])); // => false