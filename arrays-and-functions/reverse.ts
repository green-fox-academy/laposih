'use strict';

// -  Create a variable named `numList`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements in `numList`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numList`

const numList: number[] = [3, 4, 5, 6, 7];

//console.log(numList.reverse());

function reverseList (List: any[]) {
    const tempList = [];
    for (let i: number = List.length - 1; i >= 0; i--) {
        tempList.push(List[i]);
    }
    return tempList;
}
console.log(reverseList(numList));

export {}