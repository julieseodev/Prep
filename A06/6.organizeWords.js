// ['abc', 'cba', 'tea', 'ate', 'car']
// { 'abc': ['abc', 'cba'], 'aet': ['ate', 'tea'], 'acr': ['car']}

function organizeWords(arr) {
  let obj = {}; 
  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].split('').sort().join('');

    if (arr[i].split('').sort().join('') === sorted) { 
      
      if (obj[sorted] === undefined) {
        obj[sorted] = [arr[i]]; 
      } else {
        obj[sorted].push(arr[i]);
      }
    }
  }
  return obj;
}

console.log(organizeWords(['abc', 'cba', 'tea', 'ate', 'car']));
