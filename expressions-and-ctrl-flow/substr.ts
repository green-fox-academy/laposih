'use strict';

//  Create a function that takes two strings as a parameter
//  Returns the starting index where the second one is starting in the first one
//  Returns `-1` if the second string is not in the first one

function substr(str: string, keyword: string): number {
    for (let i: number = 0; i < str.length; i++) { // vegig lepdel az str karakterein
        if (str.charAt(i) == keyword.charAt(0)) { // az i-edik karakter az str-ben megegyezik-e a keyword elso karakterevel
            let match: boolean = true;
            for (let j: number = 0; j < keyword.length; j++) {
                if (str.charAt(i + j) !== keyword.charAt(j)) {
                    match = false;
                }
            }
            if (match) {
                return i;
            }
        }
    }
    return -1;
}

//  Example

// should print: `17`
console.log(substr("this is what I'm searching in", "searching"));

// should print: `-1`
console.log(substr("this is what I'm searching in", "not"));