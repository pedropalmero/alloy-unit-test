function run() {
    var Alloy = require('alloy');

    Alloy.CFG.db_name = 'my_db_test';

    // remove and create and empty database
    var db = Ti.Database.open(Alloy.CFG.db_name);
    db.remove();

    var tijasmine = require("tijasmine/tijasmine"),
        reporter = new (require("tijasmine/tijasmine-console").ConsoleReporter);

    tijasmine.addSpecModules(
        "specs/lib/counter_spec",
        "specs/model/book_spec",
        "specs/controller/index_spec",
        "specs/controller/detail_spec"
    );
    tijasmine.addReporter(reporter);
    tijasmine.execute();
}

exports.run = run;