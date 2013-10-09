var collection = Alloy.Collections.book;
var args = arguments[0] || {};
var book;

$.init = function() {
    collection.fetch();

    book = collection.get(args.item_id);

    $.title.text = book.get('title');
    $.author.text = book.get('author');

    $.win.open();
}

function closeWindow() {
    $.win.close();
}

function toggleAuthor(e) {
    $.toggleAuthor();
}

$.toggleAuthor = function(){
    if ($.author.visible === true) {
        $.toggleAuthorButton.title = 'Show author';
        $.authorLabel.visible = false;
        $.author.applyProperties({visible: false});
    } else {
        $.toggleAuthorButton.title = 'Hide author';
        $.authorLabel.visible = true;
        $.author.applyProperties({visible: true});
    }
};

$.init();