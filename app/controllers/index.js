function showDetail(e) {
    var item_id = e.row.item_id;

    Alloy.createController("detail", {"item_id": item_id}).getView().open();
}

var collection = Alloy.Collections.book;
collection.fetch();

$.index.open();
