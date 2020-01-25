// Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
// Create a test for that.

'use strict';

export function isAnagram(string1: string, string2: string): boolean {
    return string1.toLowerCase().split('').sort().toString() === string2.toLowerCase().split('').sort().toString();
}
