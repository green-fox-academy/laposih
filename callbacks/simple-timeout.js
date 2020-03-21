'use strict';

// Write a program that prints apple after 3 seconds.

setTimeout(() => {
    console.log('apple');
}, 3000);

const timeoutId = setTimeout(() => {
    console.log('Yeeey!'); // not going to run
  }, 1000);
  
  