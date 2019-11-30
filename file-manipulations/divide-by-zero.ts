'use strict';

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divide(n: number): number {
    if (n === 0) {
        throw Error('fail');
    } else {
        console.log(10/n);
        return
    }
}

try {
    divide(0);
} catch(err) {
    console.log(err.message);
}

export{}