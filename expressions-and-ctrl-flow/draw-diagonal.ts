'use strict';

let lineCount: number = 6;

// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is

for (let k: number = 0; k < lineCount; k++) {
    let percentSigns: string = '';
    for (let i: number = 0; i < lineCount; i++) {
        if (k == i || k === 0 || k === lineCount - 1 || i === 0 || i === lineCount - 1) {
            percentSigns += '%';  
        }
        else {
            percentSigns += ' ';
        }
    }
    console.log(percentSigns); 
}

export {}