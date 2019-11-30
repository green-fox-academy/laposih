'use strict';

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');
const fileToRead = 'my-file_WRONG.txt';

function numberOfLines(file: string, encoding: string): number {
    try {
        const fileContent = fs.readFileSync(file, encoding);
        return fileContent.split('\n').length;
    } catch(err) {
        console.log(err.message);
        return 0;
    }
}

console.log(numberOfLines(fileToRead, 'utf-8'));


export{}