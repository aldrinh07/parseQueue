/**
 * Created by aldrinh on 3/4/15.
 */
var app = angular.module('parseQ');

app.service('parseService', function($http, $q){

    this.postQuestion = function(quest){
        return $http ({
            method: 'POST',
            url: 'https://api.parse.com/1/classes/question',
            data: ({
                status: 'red',
            }, quest)
            })
    };

    this.getData = function(data){
        return $http ({
            method: 'GET',
            url: 'https://api.parse.com/1/classes/question',
        })
    }

    this.updateData = function() {

    };
});