app.controller('myCtrlReminderAdd', function($scope,$http,$rootScope) {
    $scope.reminderList = true;
    $scope.reminderAdd = false;
    $scope.addReminder = function () {
        $scope.reminderList = false;
        $scope.reminderAdd = true;
    }
    $scope.listReminder = function () {
        $scope.reminderList = true;
        $scope.reminderAdd = false;
    }
});