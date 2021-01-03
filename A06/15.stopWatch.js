// Write a function stopWatch(totalSeconds) that takes in a number of seconds. The function should return the time string based on that number of seconds. The time should be formatted in hours (H), minutes (M), and seconds(S) in the form HH:MM:SS.


// Hint: the seconds and minutes count of the time should never
// be greater than 59. How can we use modulo % to accomplish this?

function stopWatch(totalSeconds) {
    let time = "";
    let hr = Math.floor(totalSeconds / 3600);
        
    let min = Math.floor((totalSeconds - (hr * 3600)) / 60);
        
    let sec = totalSeconds - hr * 3600 - min * 60;
        
    return time = hr + ":" + min + ":" + sec;
}

console.log(stopWatch(0)); // => '00:00:00'
console.log(stopWatch(4)); // => '00:00:04'
console.log(stopWatch(128)); // => '00:02:08'
console.log(stopWatch(1234)); // => '00:20:34'
console.log(stopWatch(3612)); // => '01:00:12'
console.log(stopWatch(7640)); // => '02:07:20'
console.log(stopWatch(86400)); // => '24:00:00'
console.log(stopWatch(86522)); // => '24:02:02'
console.log(stopWatch(99999)); // => '27:46:39'