require("/tijasmine/tijasmine").infect(this);

describe("book model", function () {
    var Alloy = require("alloy");
    var collection;
    var item;

    beforeEach(function(){
        collection = Alloy.createCollection('book');
        item = Alloy.createModel('book');
    });

    it('create item', function(){
        item.set({
           title: "The cloud atlas",
           author: "David Mitchell"
        });
        item.save();

        collection.fetch();
        expect(collection.length).toEqual(1);
    });

    it('book description', function(){
        item.set({
           title: "The cloud atlas",
           author: "David Mitchell"
        });
        item.save();

        expect(item.toString()).toEqual("The cloud atlas (David Mitchell)");
    });
    
    it('Mark as read', function(){
        item.set({
           title: "The cloud atlas",
           author: "David Mitchell"
        });
        item.save();
        
        expect(item.isRead()).toBeFalsy();
        
        // mark the item as read
        item.markAsRead();
        expect(item.isRead()).toBeTruthy();
    });
    
    it('Fetch read', function(){
        item.set({
           title: "The cloud atlas",
           author: "David Mitchell"
        });
        item.save();
        
        collection.fetchRead();
        expect(0).toEqual(collection.length);
        
        item.markAsRead();
        item.save();
        
        collection.fetchRead();
        expect(1).toEqual(collection.length);
    });

    afterEach(function () {
        item.destroy();
    });
});