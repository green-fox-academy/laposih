const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15




[1,2,3,4].filter(filterNum);
function filterNum(value) {return value % 2 === 0;}

[1,2,3,4].filter(function (value) {return value % 2 === 0});

[1,2,3,4].filter(value => value % 2 === 0);


function reduceFunct(accumulator, currentValue) {return accumulator + currentValue};
array1.reduce(reduceFunct);

array1.reduce(function (accumulator, currentValue) {return accumulator + currentValue});

array1.reduce((accumulator, currentValue) => accumulator + currentValue);