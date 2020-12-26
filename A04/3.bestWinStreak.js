/*******************************************************************************
Write a function bestWinStreak that takes in a string of W's (wins) and L's (losses).
The function should return a number representing the longest consecutive streak
of wins. You may assume the only characters in the string are 'W' and 'L'.

Examples:

bestWinStreak('WWLWWWLWW') => 3
bestWinStreak('WWLLWWWWW') => 5
bestWinStreak('WWWW') => 4
bestWinStreak('LLL') => 0
*******************************************************************************/

function bestWinStreak(str) {
  let longest = 0;
  let win = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] === 'W') {
      win += 1;
      if (win > longest) { // longest = Math.max(win, longest)`
        longest = win;
      }  
    } else {
      win = 0;
    }
  }
  return longest;
}

console.log(bestWinStreak('WWLWWWLWW')); // => 3
console.log(bestWinStreak('WWLLWWWWW')); // => 5
console.log(bestWinStreak('WWWW')); // => 4
console.log(bestWinStreak('LLL')); // => 0