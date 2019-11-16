'use strict';

// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

let size: number = 3;
let matrix: numbers[][] = [];
//matrix = [[0, 0, 0, 1], [0, 0, 1, 0], [0, 1, 0, 0], [1, 0, 0, 0]];
matrix.fill(0, 0, size);
console.log(matrix);




/*
this.things = [];

        for(var i: number = 0; i < 10; i++) {
            this.things[i] = [];
            for(var j: number = 0; j< 10; j++) {
                this.things[i][j] = new Thing();




matrix = matrix.map(function(e, i) {
    if (i == 0) {
        return 1;
    }
    else {
        return 0;
    }
  });
console.log(matrix);


/*var array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]


let lineCount: number = 4;
for (let k: number = 0; k < lineCount; k++) {
    let percentSigns: string = '';
    for (let i: number = 0; i < lineCount; i++) {
        if (k == i || k === 0 || k === lineCount - 1 || i === 0 || i === lineCount - 1) {
            percentSigns += '0';  
        }
        else {
            percentSigns += '1';
        }
    }
    console.log(percentSigns); 
}
*/

export {}