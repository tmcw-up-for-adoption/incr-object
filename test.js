var incr = require('./'),
    assert = require('assert');

var obj = new incr();

assert.equal(obj.incr('foo'), obj);
assert.equal(obj.value('foo'), 1);
assert.equal(obj.incr('foo'), obj);
assert.equal(obj.value('foo'), 2);
assert.equal(obj.decr('foo'), obj);
assert.equal(obj.value('foo'), 1);

assert.deepEqual(obj.entries(), [{
    key:'foo',
    value:1
}]);

assert.equal(obj.incr('bar'), obj);

assert.deepEqual(obj.entries(), [{
    key:'foo',
    value:1
}, {
    key:'bar',
    value:1
}]);
