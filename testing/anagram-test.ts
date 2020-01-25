'use strict';

import test from 'tape';
import { isAnagram } from './anagram';

test('isAnagram function', t => {
    t.ok(isAnagram('brainy', 'binary'), 'should return true if it gets two anagrams');
    t.ok(isAnagram('bRaiNy', 'bInary'), 'should return true if it gets two anagrams containing uppercase letters');
    t.notok(isAnagram('brainy', 'kiskutya'), 'should return false if it gets two words that are not anagrams');
    t.end();
})
