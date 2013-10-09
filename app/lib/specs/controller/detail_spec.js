require("/tijasmine/tijasmine").infect(this);

describe("detail controller", function () {
    var Alloy = require("alloy");
    var $;
    var collection;
    var item;

    beforeEach(function(){
        collection = Alloy.createCollection('book');
        item = Alloy.createModel('book');
    });

    it('create', function () {
        item.set({
            id: 1,
            title: "The cloud atlas",
            author: "David Mitchell"
        });
        item.save();

        $ = Alloy.createController('detail', {item_id: item.get('id')});

        expect($.title.text).toEqual(item.get('title'));
    });

    it('toggle author', function () {
        item.set({
            id: 1,
            title: "The cloud atlas",
            author: "David Mitchell"
        });
        item.save();

        $ = Alloy.createController('detail', {item_id: item.get('id')});

        expect($.author.visible).toEqual('false');

        $.toggleAuthor();
        expect($.author.visible).toBeTruthy();


        $.toggleAuthor();
        expect($.author.visible).toBeFalsy();
    });

    afterEach(function () {
        item.destroy();
    });
});