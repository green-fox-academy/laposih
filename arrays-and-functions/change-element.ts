'use strict';

// -  Create an array named `numList` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numList: number[] = [1, 2, 3, 8, 5, 6];

console.log(numList);

/*numList.forEach(function (e, i) {
    if (e == 8) {
        numList[i] = 4;
    }
});

console.log(numList[3]);*/


numList = numList.map(function(e) {
    if (e == 8) {
        return 4;
    }
    else {
        return e;
    }
  });
  console.log(numList);

/*let numList: number[] = [1, 2, 3, 8, 5, 6].map(function(e: number); {
    return e * 2;
});
console.log(numList);


let triples = [1, 2, 3, 4, 5].map(function(e) {
  return e * 3;
});
console.log(triples); /** [3, 6, 9, 12, 15]



var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);

// expected output: Array [2, 8, 18, 32] */


export {}