require("/tijasmine/tijasmine").infect(this);

describe("index controller", function () {
    var Alloy = require("alloy");
    var $;
    var collection;
    var item;

    beforeEach(function(){
        collection = Alloy.createCollection('book');
        item = Alloy.createModel('book');
    });

    it('create with no items', function(){
        $ = Alloy.createController('index', {});

        expect($.__iamalloy).toEqual(true);

        expect($.table.getData().length).toEqual(0);
    });

    it('create with 1 item', function () {
        item.set({
            title: "The cloud atlas",
            author: "David Mitchell"
        });
        item.save();

        $ = Alloy.createController('index', {});

        expect($.table.getData().length).toEqual(1);
    });

    afterEach(function () {
        item.destroy();
    });
});