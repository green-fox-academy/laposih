'use strict';

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3

let a: number = 1;
let givenNumber: number = 5;
let sum: number = 0;

for (let i: number = 1; i <= givenNumber; i++) {
    sum += i; 
}

console.log('Sum of ' + givenNumber + ' = ' + sum);
console.log('Average of ' + givenNumber + ' = ' + sum/givenNumber);