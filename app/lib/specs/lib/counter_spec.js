require("/tijasmine/tijasmine").infect(this);

describe("counter", function () {
    var counter = require('counter');

    beforeEach(function () {
        counter.reset();
    });

    it('add', function () {
        counter.add(1);

        expect(counter.getTotal()).toEqual(1);
    });

    it('minus', function () {
        counter.minus(1);

        expect(counter.getTotal()).toEqual(-1);
    });

    it('multiple operations', function () {
        counter.minus(1);
        counter.add(5);
        counter.minus(2);
        counter.add(10);

        expect(counter.getTotal()).toEqual(12);
    });
});