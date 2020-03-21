// We have a number of bunnies and each bunny has two big floppy ears. We want to compute
//the total number of ears across all the bunnies recursively (without loops or multiplication).

'use strict';

function bunnyEarCounter(n: number) {
    let result: number = 0;
    if (n == 1) {
        return 2;    
    } else {
        return 2 + bunnyEarCounter(n - 1);
    }
}

console.log(bunnyEarCounter(3));
console.log(bunnyEarCounter(1340));