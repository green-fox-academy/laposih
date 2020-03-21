//Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

'use strict';

function numberAdder(n: number) {
    let result: number = 0;
    if (n <= 1) {
        return 1;    
    } else {
        return n + numberAdder(n - 1);
    }
}


console.log(numberAdder(3));
console.log(numberAdder(8));
  

export {}