var Alloy = require('alloy');

var definition = {
    config: {
        columns: {
            "id": "INTEGER PRIMARY KEY",
            "title": "TEXT",
            "author": "TEXT",
            "read": "INTEGER"
        },
        adapter: {
            type: "sql",
            collection_name: "book",
            db_name: Alloy.CFG.db_name,
            idAttribute: "id"
        }
    },      
    extendModel: function(Model) {      
        _.extend(Model.prototype, {
            // extended functions and properties go here
            toString: function() {
                return String.format("%s (%s)", this.get('title'), this.get('author'));
            },
            isRead: function() {
                return 1 === this.get('read');
            },
            markAsRead: function() {
                this.set('read', 1);
            }
        });
        
        return Model;
    },
    extendCollection: function(Collection) {        
        _.extend(Collection.prototype, {
            fetchRead: function(){
                var table = definition.config.adapter.collection_name;

                this.fetch({query:'SELECT * from ' + table + ' where read=1'});
            }
        });
        
        return Collection;
    }
}

exports.definition = definition;

