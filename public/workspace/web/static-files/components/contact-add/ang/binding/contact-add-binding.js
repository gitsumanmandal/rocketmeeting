app.controller('myCtrlContactAdd', function($scope,$http,$rootScope) {
    $scope.addContact = function(){
        $scope.db.transaction(function (tx) {

            var selectQuery = 'SELECT * FROM CONTACT WHERE NAME = "' + $scope.name + '"';

            var insertQuery = 'INSERT INTO CONTACT VALUES (' +
            '"'+ $scope.name +'",'+
            '"'+ $scope.phonePrimaryCategory +'",'+
            '"'+ $scope.phone +'",'+
            '"'+ $scope.emailPrimaryCategory +'",'+
            '"'+ $scope.email +'",'+
            '"'+ $scope.nickname +'",'+
            '"'+ $scope.company +'",'+
            '"'+ $scope.website +'",'+
            '"'+ $scope.address +'",'+
            '"'+ $scope.dob +'")';

            tx.executeSql(selectQuery, [], function (tx, results) {
                if(results.rows.length != 0){
                    alert("Contact already exists");
                }
                else{
                    tx.executeSql(insertQuery, [], function (tx, results) {
                        $scope.listContact();
                    }, null);
                }
            }, null);
         });
    }
});