'use strict';

//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending

function bubble(arr: number[]): number[] {
    let swap: boolean = false;
    do {
        swap = false;
        for (let i: number = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let container: number = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = container;
                swap = true;
            }
        }
    } while (swap);
    return arr;
}

function advancedBubble(arr: number[], descend: boolean): number[] {
    let swap: boolean = false;
    do {
        swap = false;
        for (let i: number = 0; i < arr.length - 1; i++) {
                if ((!descend && arr[i] > arr[i + 1]) || (descend && arr[i] < arr[i + 1])) {
                    let container: number = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = container;
                    swap = true;
                }
            } 
    } while (swap);
    return arr;
}

//  Example:
console.log(bubble([1, 34, 12, 24, 9, 5]));
    //  should print [5, 9, 12, 24, 34]
console.log(advancedBubble([34, 12, 24, 9, 5], true));
    //  should print [34, 24, 12, 9, 5]



    export { }