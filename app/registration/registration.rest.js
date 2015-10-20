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
        Fireproof.bless($q);
        var url = 'https://amber-torch-9068.firebaseio.com/registrants';
        var firebase = new Firebase(url);
        var fireproof = new Fireproof(firebase)
        var token = 'xsdUVYi0KpWTRkZHWorwapmGuItdrzY0boCeQyZv';

        // Firebase Authentication
        this.authenticate = function() {
            // TODO
        }

        this.create = function(params) {
            return fireproof.push(params);
        }
        
        this.get = function() {
            // TODO
        }
    }
    
})(window.angular);