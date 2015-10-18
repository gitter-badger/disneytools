(function(angular) {
    'use strict';
    
    angular
        .module('myApp.registration')
        .factory('RegistrationModel', registrationModel);
        
    registrationModel.$inject = [
        'loading',
    ];
    
    function registrationModel (loading) {
        function registration () {
            // this.isLoading = loading.new();
        }
        
        registration.loading = loading.new();
        
        return registration;
    }
})(window.angular);