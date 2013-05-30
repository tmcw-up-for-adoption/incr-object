# incr-object

A standalone incrementing object. Good for quick statistics scripts
and so on. Kind of like a set, except geared towards binning. Basically
just abstracts away the annoyingness of `undefined++`.

```js
var incr = require('incr-object');

var obj = new incr();

// increment the bucket for foo. it's now 1
obj.incr('foo');

// bring it back down to zero
obj.decr('foo');

// get the value for foo
obj.value('foo');

// get the value for bar. since it's undefined, returns 0
obj.value('bar');

// get all combos as { key: 'foo', value: 0 } objects
obj.entries();
```
