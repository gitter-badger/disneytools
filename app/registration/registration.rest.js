(function (angular) {
    'use strict';
    
    angular
        .module('myApp.registration')
        .service('RegistrationREST', registrationRest);
    
    registrationRest.$inject = [
        '$http',
        '$q'
    ];
    
    function registrationRest($http, $q) {
        var url = 'https://amber-torch-9068.firebaseio.com/user';
        var firebase = new Firebase(url);
        Fireproof.bless($q);
        var fireproof = new Fireproof(firebase)
        var token = 'xsdUVYi0KpWTRkZHWorwapmGuItdrzY0boCeQyZv';

        // Firebase Authentication
        this.authenticate = function () {
            // TODO
        }

        this.signup = function (params) {
            return fireproof.set(params);
        }
        
        this.get = function () {
            // TODO
        }
    }
    
})(window.angular);