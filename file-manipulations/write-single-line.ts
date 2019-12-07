'use strict';

// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

const fs = require('fs');
const fileToWrite = './fake/my-file2.txt';
const name = 'Helga';

function writeName(file: string, encoding: string): string {
    try {
        fs.writeFileSync(file, name);
        return
    } catch(err) {
        console.log(err.message);
        console.log('Unable to write file: my-file2.txt');
    }
}

writeName(fileToWrite, name);

console.log(fs.readFileSync(fileToWrite, 'utf-8'));

export{}