'use strict';

import test from 'tape';
import { Sum } from './Sum';

test('sum of elements of a list', t => {
    let test_list: number[] = [1, 2, 3];
    let testInstance1: Sum = new Sum(test_list);
    t.equal(testInstance1.sum(), 6, 'containing [1, 2, 3] should be equal to 6');
    let test_list2: number[] = [1];
    let testInstance2: Sum = new Sum(test_list2);
    t.equal(testInstance2.sum(), test_list2[0], 'having only one element should be equal to the element of the list');
    let test_list3: number[] = [];
    let testInstance3: Sum = new Sum(test_list3);
    t.equal(testInstance3.sum(), 0, 'which is empty should be 0');     //or should it be undefined?
    t.end();
})