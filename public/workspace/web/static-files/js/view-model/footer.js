app.controller('myCtrlFooter', function ($scope, $http) {
    $scope.isContact = true;
    $scope.isCreate = false;
    $scope.isReminder = false;
    $scope.showContact = function () {
        $scope.isContact = true;
        $scope.isCreate = false;
        $scope.isReminder = false;
    }
    $scope.showCreate = function () {
        $scope.isContact = false;
        $scope.isCreate = true;
        $scope.isReminder = false;
    }
    $scope.showReminder = function () {
        $scope.isContact = false;
        $scope.isCreate = false;
        $scope.isReminder = true;
    }
});