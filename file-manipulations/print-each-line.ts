//'use strict';

// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

const fs = require('fs');
const fileToRead = 'my-file.txt';
//const fileToRead = 'my-file-WRONG.txt';

function read(file: string, encoding: string): string {
    let fileContent = fs.readFileSync(file, encoding);
    console.log(fileContent);
    return
}

try {
    read(fileToRead, 'utf-8');
} catch (err) {
    console.log('Unable to read file: ' + fileToRead);
}



export{}