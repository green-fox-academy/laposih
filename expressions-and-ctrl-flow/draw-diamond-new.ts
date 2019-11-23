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

/*
function drawSpaces(lineCount:number): string {
    let spaces: string [] = [];
    for (let i: number = 0; i < lineCount; i++) {
        if (i <= lineCount / 2) {
            spaces.push()
        }

    }
}

function drawDiamond(lineCount: number): string {
    
}
*/

// innen

let actLine = 0;
let rowTypes: string[] = [];

function spaceCounter(actLine: number): number {
    return lineCount / 2 - actLine - 1;
}

console.log(spaceCounter(7));

function starCounter(actline: number): number {
    return actline * 2 + 1;
}

while (actLine < lineCount / 2) {
    for (let spc = 0; spc < spaceCounter(actLine); spc++){
        rowTypes[actLine] += ' ';
    }
    for (let star = 0; star < starCounter(actLine); star++){
        rowTypes[actLine] += '*';
    } 
    actLine++;
}

actLine = 0;
while (actLine < lineCount / 2) {
    console.log(rowTypes[actLine]);
    actLine++;
}

while (actLine++ < lineCount) {
    console.log(rowTypes[lineCount - actLine]);
}


export {}