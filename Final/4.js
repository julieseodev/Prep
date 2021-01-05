/**************************************************************************************
Write a function `usernames(names)` that takes in an array of names. The function
should return an array containing the corresponding usernames. See the examples.

Examples:

var names = [
  'Oscar Alvarez',
  'Danny Catalano',
  'Kurstie Ozuna',
  'Matt Haws'
];

usernames(names); // => [ 'oalvarez', 'dcatalano', 'kozuna', 'mhaws' ]

Difficulty: Medium
*************************************************************************************/

function usernames(names) {
  let newNames = [];
  for (let i = 0; i < names.length; i++) {
    let eachName = names[i].split(' ');
    // name = 'Oscar Alvarez' => 'oalvarez'
    // name = 'Matt Haws'
    let initial = eachName[0][0].toLowerCase();
    let lastName = eachName[1].toLowerCase();
    newNames.push(initial + lastName);
  }
  return newNames;
}


var names = [
  'Oscar Alvarez',
  'Danny Catalano',
  'Kurstie Ozuna',
  'Matt Haws'
];

console.log(usernames(names)); // => [ 'oalvarez', 'dcatalano', 'kozuna', 'mhaws' ]