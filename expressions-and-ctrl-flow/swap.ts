'use strict';

// Swap the values of these variables
let a: number = 123;
let b: number = 526;

console.log(a);
console.log(b);

/*a = a + b
b = a - b
a = a - b*/

let c: number = a;
a = b;
b = c;

console.log(a);
console.log(b);

export {}