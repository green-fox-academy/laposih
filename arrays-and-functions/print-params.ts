'use strict';

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(...params: any[]): any {
    let output: string = '';
    for (let i: number = 0; i < params.length; i++) {
        output = output + params[i] + ' ';
    }
    console.log(output);
}

printParams(4, true, "kiskutya");

export{}