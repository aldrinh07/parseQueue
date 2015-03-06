/**
 * Created by aldrinh on 3/4/15.
 */
var app = angular.module('parseQ');

app.controller('MainController', function($scope, parseService){

    $scope.test = 1000;

    $scope.postData = function (){
        console.log('postData Function Initialized')
        parseService.postQuestion({question: $scope.question}).then(function(){
            $scope.getParseData();
        })
        };

    $scope.getParseData = function (){
        parseService.getData().then(function(res) {
            $scope.data = res.data.results;
            console.log($scope.data);
        })
    };
    $scope.getParseData();

//    $scope.changeStatus = function() {
//
//    }
});