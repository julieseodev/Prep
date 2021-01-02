// Write a function winningHand(hand1, hand2) that takes in two strings representing a hand of 4 cards. Return the string of the hand with the higher total score. If there is a tie, return 'DRAW'. Possible cards are J, Q, K.
// J = 1 point
// Q = 2 points
// K = 3 points


// Examples:
// winningHand('JQKJ', 'QQJJ'); => 'JQKJ'
// winningHand('KJKJ', 'QQQK'); => 'QQQK'
// winningHand('JKJJ', 'QQJJ'); => 'DRAW'
// winningHand('KJKJ', 'QQQQ'); => 'DRAW'

function winningHand(hand1, hand2) {
    if (totalScore(hand1) === totalScore(hand2)) {
        return "DRAW"
    } 
    if (totalScore(hand1) > totalScore(hand2)) {
        return hand1;
    } else {
        return hand2;
    }
}

function totalScore(hand) {
    let score = 0;
    for (let i = 0; i < hand.length; i++) {
        if (hand[i] === 'J') {
            score += 1;
        } else if (hand[i] === 'Q') {
            score += 2; 
        } else {
            score += 3;
        }
    }
    return score;
}


// console.log(totalScore('JQKJ')); // 7

console.log(winningHand('JQKJ', 'QQJJ')); // => 'JQKJ'
console.log(winningHand('KJKJ', 'QQQK')); // => 'QQQK'
console.log(winningHand('JKJJ', 'QQJJ')); // => 'DRAW'
console.log(winningHand('KJKJ', 'QQQQ')); // => 'DRAW'