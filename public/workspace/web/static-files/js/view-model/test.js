var app = angular.module('myApp', []);
app.controller('myCtrlTest', function($scope, $location) {
    $scope.pageURL = $location.absUrl();
    if(($scope.pageURL).substring(($scope.pageURL).lastIndexOf('/')+1, ($scope.pageURL).indexOf("html")-1) == "testConformation" || ($scope.pageURL).substring(($scope.pageURL).lastIndexOf('/')+1, ($scope.pageURL).indexOf("html")-1) == "test"){
       $scope.conformationPage = true; 
    }
});