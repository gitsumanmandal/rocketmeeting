app.controller('myCtrlContactList', function($scope,$http,$rootScope) {
    $scope.names = [];

    var x = {
        category: "Work",
        number: "9874814459"
    };
    var x1 = {
        category: "Personal",
        number: "9681288214"
    };
    var x2 = {
        category: "Office",
        number: "601223456"
    };
    $scope.numberplate = [];
    $scope.numberplate.push(x);
    $scope.numberplate.push(x1);
    $scope.numberplate.push(x2);

    $scope.contactListLoaded = function(){
        // $scope.names.removeAll();
        $scope.listContactDB();
    }

    $scope.listContactDB = function(){
        $scope.db.transaction(function (tx) { 
            tx.executeSql('SELECT * FROM CONTACT', [], function (tx, results) {
                if(results.rows.length !=0){
                    for(var i = 0; i < results.rows.length; i++){
                        var obj = {
                            name: results.rows[i].NAME,
                            number: results.rows[i].PHONE_NUMBER 
                        };
                        $scope.names.push(obj);
                    }
                }
            }, null); 
         });
    }
});