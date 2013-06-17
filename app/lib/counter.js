var counter = {
    count: 0
};

counter.add = function(amount) {
    counter.count += amount;
};

counter.minus = function(amount) {
    counter.count -= amount;
};

counter.getTotal = function() {
    return counter.count;
};

counter.reset = function() {
    counter.count = 0;
};



exports.add = counter.add;
exports.minus = counter.minus;
exports.getTotal = counter.getTotal;
exports.reset = counter.reset;