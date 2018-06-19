var addContact = function (db) {
    db.transaction(function (tx) { 
        tx.executeSql('SELECT * FROM DEMO', [], function (tx, results) {
            return results.rows;
        }, null); 
     });
}