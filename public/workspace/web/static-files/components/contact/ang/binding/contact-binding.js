app.controller('myCtrlContact', function($scope,$http,$rootScope) {
    $scope.contactList = true;
    $scope.contactAdd = false;
    $scope.contactEmail = false;
    $scope.addContact = function () {
        $scope.contactList = false;
        $scope.contactAdd = true;
        $scope.contactEmail = false;
    }
    $scope.listContact = function () {
        $scope.contactList = true;
        $scope.contactAdd = false;
        $scope.contactEmail = false;
    }
    $scope.emailContact = function () {
        $scope.contactList = false;
        $scope.contactAdd = false;
        $scope.contactEmail = true;
    }
});