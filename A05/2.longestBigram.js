/*******************************************************************************
Write a function longestBigram(sentence) that takes in a sentence string and returns
the longest bigram in the sentence. A bigram is a pair of consecutive words.
When returning the bigram, include the space between the words.
Assume there will be no punctuation. In the case of a tie, return the earlier bigram.

Examples:

longestBigram('measure twice cut once'); // => 'measure twice'
longestBigram("One must have a mind of winter"); // => 'must have'
longestBigram("go home to eat"); // => 'go home'
longestBigram("his last assessment is fun"); // => 'last assessment'
*******************************************************************************/

function longestBigram(sentence) {
  let arr = sentence.split(' ');
  let longestBigram = "";
  for (let i = 0; i < arr.length - 1; i++) {
    // currBigram is a bigram string 
    let currBigram = arr[i] + ' ' + arr[i + 1];
    
    // compare the lengths of two strings: longestBigram and currBigram
    // then reassign longestBigram if currBigram is longer
    if (currBigram.length > longestBigram.length) {
      longestBigram = currBigram;
    }
  }
  return longestBigram; 
}


console.log(longestBigram('measure twice cut once')); // => 'measure twice'
console.log(longestBigram("One must have a mind of winter")); // => 'must have'
console.log(longestBigram("go home to eat")); // => 'go home'
console.log(longestBigram("his last assessment is fun")); // => 'last assessment'