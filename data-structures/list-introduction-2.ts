//Create a list ('List A') which contains the following values
//Apple, Avocado, Blueberries, Durian, Lychee
//Create a new list ('List B') with the values of List A
//Print out whether List A contains Durian or not
//Remove Durian from List B
//Add Kiwifruit to List A after the 4th element
//Compare the size of List A and List B
//Get the index of Avocado from List A
//Get the index of Durian from List B
//Add Passion Fruit and Pomelo to List B in a single statement
//Print out the 3rd element from List A

'use strict';

const listA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
const listB: string[] = listA.map(x => x);

console.log('List A includes Durian: ' + listA.includes('Durian'));

listB.splice(listB.indexOf('Durian'), 1);
listA.splice(4, 0, 'Kiwifruit');

function compareLists(list1: any[], list2: any[]){
    if (list1.length > list2.length){
        console.log('List 1 is longer than list 2');
    }
    if (list1.length < list2.length){
        console.log('List 2 is longer than list 1');
    }
    else {
           // if (list1.length == list2.length){
        console.log('The lists are equally long.');
    }
}

compareLists(listA, listB);

//console.log(listA);
//console.log(listB);

export{}