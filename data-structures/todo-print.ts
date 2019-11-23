'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';

let array: string [] = todoText.split(' ');

array.splice(array.length, 0, ' - Download games\n');
array.splice(array.length, 0, '     - Diablo\n');
array.splice(0, 0, 'My todo:\n');

todoText = array.join(' ');

console.log(todoText);