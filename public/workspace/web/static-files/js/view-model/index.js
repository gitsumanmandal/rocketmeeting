var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/contact", {
        templateUrl : "../components/contact/ang/template/contact.html"
    })
    .when("/create", {
        templateUrl : "../components/reminder-add/ang/template/reminder-add.html"
    })
    .when("/reminder", {
        templateUrl : "../components/reminder-list/ang/template/reminder-list.html"
    });
});
app.controller('myCtrlIndex', function ($scope, $location) {
    $scope.name;
    $scope.db;
    $scope.openNav = function () {
        document.getElementById("mySidenav").style.width = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        $('#sidemeneudrop').show();
    }
    $scope.closeNav = function () {
        document.getElementById("mySidenav").style.width = "0";
        document.body.style.backgroundColor = "white";
        $('#sidemeneudrop').hide();
    }
    //document.addEventListener("deviceready", $scope.onDeviceReady, false);

    // device APIs are available
    //
    $scope.appLoaded = function () {
        $scope.db = window.openDatabase("ROCKETMEETING", "1.0", "Rocket Meeting Application Database", 200000);
        $scope.db.transaction(function (tx) { 
            tx.executeSql('CREATE TABLE IF NOT EXISTS CONTACT (NAME unique, PHONE_CATEGORY, PHONE_NUMBER, EMAIL_CATEGORY, EMAIL, NICKNAME, COMPANY, WEBSITE, ADDRESS, DOB)');
        });
        $scope.db.transaction(function (tx) { 
            tx.executeSql('CREATE TABLE IF NOT EXISTS REMINDER (TITLE unique, LOCATION, DOM, DESCRIPTION, ATTENDEE_LIST)');
        });
    }

    // $scope.addContact = function(){
    //     $scope.db.transaction(function (tx) {
    //         tx.executeSql('INSERT INTO CONTACT VALUES ("Suman Mandal", "Work", "9874814459", "Work", "sumanmandal64@gmail.com", "", "Freelancer", "git.suman.mandal.com", "Mumbai", "23/12/1993")');
    //      }); 
    // }

    // $scope.listContact = function(){
    //     $scope.db.transaction(function (tx) { 
    //         tx.executeSql('SELECT * FROM CONTACT', [], function (tx, results) {
    //             console.log(results.rows);
    //         }, null); 
    //      });
    // }
    // Populate the database
    //
    $scope.populateDB = function(tx) {
        tx.executeSql('DROP TABLE IF EXISTS DEMO');
        tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
        tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
        tx.executeSql('SELECT * FROM DEMO', [], function (tx, results) {
            alert(results);
        });
    }

    // Transaction error callback
    //
    $scope.errorCB = function(tx, err) {
        alert("Error processing SQL: "+err);
    }

    // Transaction success callback
    //
    $scope.successCB = function() {
        alert("success!");
    }
    
});