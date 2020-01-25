// Create a test method
// Instantiate an Object from your class in the method
// Use the t.equal()
// The expected parameter should be the same string (eg. 'apple')
// The actual parameter should be the return value of the method (eg. myobject.getApple())
// Run the test
// Change the expected value to make the test failing
// Run the test
// Fix the returned value to make the test succeeding again

'use strict';

import test from 'tape';
import {Apple} from './Apple';

test('getApple method', t => {
    let apple: Apple = new Apple;
    t.equal(apple.getApple(), 'apple', 'should return apple')
    t.end();
})