Array.prototype.reduce2 = function(callback, initialValue) {
    if (typeof callback !== 'function' || this.length === 0) {
        return 'False';
    }

    var accumulator;
    var startIndex;

    if (arguments.length > 1) {
        accumulator = initialValue;
        startIndex = 0;
    } else {
        accumulator = this[0];
        startIndex = 1;
    }

    for (var i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
};

var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce2(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 5);

console.log(sum);
