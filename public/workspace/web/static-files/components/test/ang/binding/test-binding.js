app.controller('myCtrlTest', function($scope,$http,$window,$interval) {
    $scope.hr = 0;
    $scope.min = 0;
    $scope.sec = 10;
    
var myVar = setInterval(function(){ myTimer() }, 1000);

function myTimer() {
    if($scope.sec==0){
        $scope.sec = 59;
        if($scope.min==0){
            $scope.min=59;
            $scope.hr--;
        }
        else{
            $scope.min--;
        }
    }
    else{
        $scope.sec--;
    }
    var t = $scope.hr+" : "+$scope.min+" : "+$scope.sec;
    if($scope.hr == -1){
       alert("Time out");
    }
    document.getElementById("watch").innerHTML = t;
}

//get path for next question snapshot
// testID ---> contentsArray ---> contentId ---> imagePath

var imgSrc = "/free/mcq/mcq1";
var fullPath = "../../questions"+imgSrc+".png";

// $window.alert($scope.selectedOption);
// console.log($scope.selectedOption);

$scope.newValue = function(value) {
     console.log(value);
}

$scope.resetResponse = function(){
    console.log("clearing");
  $scope.selectedOption = '';
};

$scope.submitAndNext = function(){
    console.log("next");
  $scope.selectedOption = '';
};
});