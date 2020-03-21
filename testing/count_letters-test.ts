'use strict';

import test from 'tape';
import { letterCounter } from './count_letters';

test('', t => {
    let testObj: { [key: string]: number } = {
        'a': 2,
        'b': 2
    }
    t.deepEqual(letterCounter('abba'), testObj);
    t.end();
})