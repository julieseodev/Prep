/*******************************************************************************
Write a function bigramArray(sentence) that takes in a sentence string and returns
the an array of containing all bigrams in the sentence. A bigram is a pair of
consecutive words of a sentence.

Examples:

bigramArray('today is a great day') => [ 'today is', 'is a', 'a great', 'great day' ]
bigramArray('bigrams are very useful') => [ 'bigrams are', 'are very', 'very useful' ]
*******************************************************************************/

function bigramArray(sentence) {
  let newArr = [];
  let arr = sentence.split(' ');

  for (let i = 0; i < arr.length - 1; i++) {    // 마지막까지 안가
    newArr.push(arr[i] + ' ' + arr[i + 1]);

  }
  return newArr;
}

console.log(bigramArray('today is a great day')); // => [ 'today is', 'is a', 'a great', 'great day' ]
console.log(bigramArray('bigrams are very useful')); // => [ 'bigrams are', 'are very', 'very useful' ]
