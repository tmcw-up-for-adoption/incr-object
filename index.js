function incrObj() { this.o = {}; }

// Increment by 1
incrObj.prototype.incr = function(k) {
    if (this.o[k] === undefined) this.o[k] = 1;
    else this.o[k]++;
    return this;
};

// Decrement by 1
incrObj.prototype.decr = function(k) {
    if (this.o[k] === undefined) this.o[k] = -1;
    else this.o[k]--;
    return this;
};

// Add or subtract any number
incrObj.prototype.plus = function(k, v) {
    if (this.o[k] === undefined) this.o[k] = 0;
    this.o[k] += v;
    return this;
};

// Get a specific value or zero
incrObj.prototype.value = function(k) {
    if (this.o[k] === undefined) return 0;
    return this.o[k];
};

incrObj.prototype.entries = function() {
    var a = [];
    for (var k in this.o) {
        a.push({
            key: k,
            value: this.o[k]
        });
    }
    return a;
};

incrObj.prototype.increment = incrObj.prototype.incr;
incrObj.prototype.decrement = incrObj.prototype.decr;

module.exports = incrObj;
