require('./index.js');
const assert = require('assert');

{
    assert.strictEqual('abcabc'.search(/a/), 0); // Match at index 0
    assert.strictEqual('abcabc'.search(new RegExp('a', 'g')), 0); // Global match at index 0
    assert.strictEqual('abcabc'.search(/x/), -1); // No match
    assert.strictEqual('abcabc'.search('a'), 0); // Non-regex match at index 0
    assert.strictEqual('No ReDoS'.search('ReDoS'), 3); // Non-regex match at index 0
}

{
    assert.strictEqual('abcabc'.replace(/a/, 'x'), 'xbcabc'); // Regular replacement
    assert.strictEqual('abcabc'.replace(new RegExp('a', 'g'), 'x'), 'xbcxbc'); // Global replacement
    assert.strictEqual('abcabc'.replace(/x/, 'y'), 'abcabc'); // No match
    assert.strictEqual('abcabc'.replace('a', 'x'), 'xbcabc'); // Non-regex replacement
}

{
    assert.deepStrictEqual('a,b,c'.split(','), ['a', 'b', 'c']); // Regular split
    assert.deepStrictEqual('a,b,c'.split(new RegExp(',')), ['a', 'b', 'c']); // Split with regex
    assert.deepStrictEqual('a,b,c'.split(/x/), ['a,b,c']); // No match, returns the original string
    assert.deepStrictEqual('a,b,c'.split(','), ['a', 'b', 'c']); // Non-regex split
}

console.log('All test cases passed!');
