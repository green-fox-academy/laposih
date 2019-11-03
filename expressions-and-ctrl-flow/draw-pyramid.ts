'use strict';

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let stars: string = '';
let spaces: string = '';
let lines: number = 4;
let a: number = 1;
let b: number = lines - 1;

for (let k: number = 0; k < lines; k++) {
    for (let i: number = 0; i < a; i++) {
        stars += '*';  
    }
    for (let j: number = 0; j < b; j++) {
        spaces += ' ';
    }
    console.log(spaces + stars);
    stars = '';
    spaces = '';
    a += 2;
    b -= 1;  
}



export {}