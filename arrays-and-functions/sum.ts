'use strict';

// Write a function called `sum` that returns the sum of numbers from zero to the given parameter

function sum(number: number){
    let sum = 0;
    for (let i: number = 0; i <= number; i++) {
        sum += i;
    }
    return sum;
}

console.log(sum(5));

export{}