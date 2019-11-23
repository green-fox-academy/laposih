'use strict';

const abc: { [key: number]: string } = {};

function isEmpty (object: any){
    return Object.keys(abc).length === 0;
}

console.log('Map is empty: ' + isEmpty(abc));

const source: { [key: number]: string } = {
    97:	'a',
    98:	'b',
    99:	'c',
    65:	'A',
    66:	'B',
    67:	'C'
}

Object.assign(abc, source); 
console.log('Map is empty: ' + isEmpty(abc));

console.log(Object.keys(abc));
console.log(Object.values(abc));

const source2: { [key: number]: string } = {68: 'D'}
Object.assign(abc, source2);

console.log(Object.keys(abc).length);
console.log(abc[99]);

delete abc[97];

function is100Key (object: any){
    return Object.keys(abc).includes('100');
}
console.log('There is an associated value with key 100: ' + isEmpty(abc));

Object.keys(abc).forEach(function(key) { delete abc[key]; });

console.log(abc);

export{}
