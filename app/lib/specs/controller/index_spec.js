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

        expect($.table.getSections().length).toEqual(0);
    });

    it('create with 1 item', function () {
        item.set({
            title: "The cloud atlas",
            author: "David Mitchell"
        });
        item.save();

        $ = Alloy.createController('index', {});

        expect($.table.getSections()[0].rowCount).toEqual(1);
    });

    it('create with 2 items', function () {
        item.set({
            title: "The cloud atlas",
            author: "David Mitchell"
        });
        item.save();

        var item2 = Alloy.createModel('book');
        item2.set({
            title: "Design of design",
            author: "Brooks"
        });
        item2.save();

        $ = Alloy.createController('index', {});

        expect($.table.getSections()[0].rowCount).toEqual(2);
    });

    afterEach(function () {
        item.destroy();
    });
});