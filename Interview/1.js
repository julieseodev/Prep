// #### HK Phone Number ####
// In Hong Kong, phone numbers are formatted as
// "xxxx xxxx" where "x" is any numerical digit (0-9). Write a function
// that determines whether a given string is a valid Hong Kong phone number.
//
// constraint: You may not use RegExp.
//
// examples:
// hk_phone_number('1234 5678') #=> true
// hk_phone_number('ar32 t19i') #=> false
// hk_phone_number('123 45678') #=> false
// hk_phone_number('12345678') #=> false
// hk_phone_number('1234 567') #=> false
// hk_phone_number('12345 12345') #=> false

function hk_phone_number(str) {
    if (str[4] !== ' ' || str.length !== 9) {
        return false;
    }
    // str = '1234 5678'
    let digits = '1234567890';

    for (let i = 0; i < str.length; i++) {

        // when should you check if str[i] is number? 
        // which indices do you need to check if str[i] is number or not?   0-3 5-9
        // yes because 4 is " "
        // so... what should we check? when should we check? how should we check? 
        // what should i be?
        // what should i not be? 4
        // i 가 4가 아니면 이라고 어떻게 쓸까
        
        
        if (i !== 4 && !digits.includes(str[i])) {
            return false; 

        } 
    }
    return true;
}



console.log(hk_phone_number('1234 5678')); // #=> true     
console.log(hk_phone_number('ar32 t19i')); // #=> false
console.log(hk_phone_number('123 45678')); // #=> false
console.log(hk_phone_number('12345678')); // #=> false
console.log(hk_phone_number('1234 567')); // #=> false
console.log(hk_phone_number('12345 12345')); // #=> false
console.log(hk_phone_number('1234 abcd')); // #=> false
console.log(hk_phone_number('1abc abcd')); // #=> false
console.log(hk_phone_number('1abc 1234')); // #=> false