// ['sarah', 'joey', 'carrie', 'noah']
// {'sarah': 'aahrs', 'joey': 'ejoy', 'carrie': 'aceirr', 'noah': 'ahno'}


function alphabetizeNames(arr) {
  let output = {};
  
  for (let i = 0; i < arr.length; i++) {
    // 일단 arr[i]가 하나하나의 스트링이지
    let newWord = arr[i].split('').sort().join(''); // 'sarah' => 'aahrs'
    output[arr[i]] = newWord;
  }
  return output;
}

console.log(alphabetizeNames(['sarah', 'joey', 'carrie', 'noah']));
