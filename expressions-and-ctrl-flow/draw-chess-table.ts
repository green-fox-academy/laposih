'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//
let lineCount: number = 8;

for (let k: number = 0; k < lineCount; k++) {
    let percentSigns: string = '';
    for (let i: number = 0; i < lineCount; i++) {
        if ((k % 2 !== 0 && i % 2 !== 0) || k % 2 == 0 && i % 2 == 0) {
            percentSigns += '%';  
        }
        else {
            percentSigns += ' ';
        }
    }
    console.log(percentSigns); 
}

export {}