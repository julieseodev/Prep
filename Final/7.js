/**************************************************************************************
Write a function `shoppingCartCost(cart, prices)` that takes in two objects:
 - an object representing items and their quantities in a shopping cart
 - an object representing items and their prices

The function should return the total cost of items in the shopping cart.

Examples:

var prices = {bread: 4, butter: 6, milk: 3, eggs: 7, celery: 1};
var cart1 = {bread : 2, milk: 1, eggs : 1};
var cart2 = {milk: 2, celery: 5};

shoppingCartCost(cart1, prices); // => 18
shoppingCartCost(cart2, prices); // => 11

Difficulty: Medium
*************************************************************************************/

function shoppingCartCost(cart, prices) {
    let total = 0;
    for (let food in cart) {
        let quantity = cart[food];
        let price = prices[food];
        total += quantity * price;
    }
    return total;
}

var prices = {bread: 4, butter: 6, milk: 3, eggs: 7, celery: 1};
var cart1 = {bread : 2, milk: 1, eggs : 1};
var cart2 = {milk: 2, celery: 5};

console.log(shoppingCartCost(cart1, prices)); // => 18
console.log(shoppingCartCost(cart2, prices)); // => 11
