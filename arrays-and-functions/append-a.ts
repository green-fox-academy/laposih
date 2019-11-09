'use strict';

// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

let animals: string[] = ["koal", "pand", "zebr"];

console.log(animals);

let animals2: string[] = animals.map(function(e) {
    return e + "a";
  });
  console.log(animals2);


export {}