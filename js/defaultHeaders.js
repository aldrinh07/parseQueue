/**
 * Created by aldrinh on 3/4/15.
 */
var app = angular.module('parseQ');

app.factory('httpRequestInterceptor', function(){
    return {
        request: function (config) {
            config.headers = {'X-Parse-Application-Id': 'u5ABvRRuPrmH5ble7WPOkCZtTuF8ZgnmKyIRDHMH', 'X-Parse-REST-API-Key': 'sEl72Q7X4rE3YVbYch4h26pMXXD2oLkCWbBRWKcG' };
            return config;
        }
    };
});