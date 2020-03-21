// Sum Digits
// Given a non-negative integer n, return the sum of its digits recursively (without loops).

// Hint
// Mod (%) by 10 yields the rightmost digit (e.g. 126 % 10 is 6)

// JavaScript, TypeScript
// There is no integer type in JavaScript. To remove the rightmost digit you must divide (/) the number by 10 and find a way to get the the whole number portion of that number.

'use strict';

function sumDigits(n: number) {
    let sum = 0;
    if (n == 0) {
        return n % 10;
    } else {
        return n % 10 + sumDigits(n/10);   
    }
}


console.log(sumDigits(126));
console.log(sumDigits(1));
console.log(sumDigits(12));


export {}