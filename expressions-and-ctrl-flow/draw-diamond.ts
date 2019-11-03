'use strict';

let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let a: number = 1;
let b: number = lineCount - 1;

for (let k: number = 0; k < lineCount; k++) {
    let stars: string = '';
    let spaces: string = '';
    for (let i: number = 0; i < a; i++) {
        stars += '*';  
    }
    for (let j: number = 0; j < b; j++) {
        spaces += ' ';
    }
    console.log(spaces + stars);
    a += 2;
    b -= 1;  
}

b = 1;
a = lineCount + (lineCount - 3);

for (let k: number = 0; k < lineCount -1; k++) {
    let stars: string = '';
    let spaces: string = '';
    for (let i: number = 0; i < a; i++) {
        stars += '*';  
    }
    for (let j: number = 0; j < b; j++) {
        spaces += ' ';
    }
    console.log(spaces + stars);
    a -= 2;
    b += 1;  
}


export {}