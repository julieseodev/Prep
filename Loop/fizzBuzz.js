// that takes in a number ('max')
// range 0 to 'max' (inclusive)

// if number is divisible by 3, print 'fizz'
// if number is divisible by 5, print 'buzz'
// if number is divisible by both 3 AND 5, print 'fizzbuzz'
// if number is not divisible by neither, print just the number

function fizzBuzz(max) { // 16
    for (let i = 0; i <= max; i++) { // i = 0 ~ max 
        if (i % 15 === 0) {
            console.log('fizzbuzz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(16) // 'fizzbuzz',1,2,'fizz',4,'buzz','fizz',7,8,'fizz','buzz',11,'fizz',13,14,'fizzbuzz',16
