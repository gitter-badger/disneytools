(function(angular) {
    'use strict';
    
    angular
        .module('myApp.registration')
        .factory('RegistrationModel', registrationModel);
        
    registrationModel.$inject = [
        'loading',
        'RegistrationREST',
    ];
    
    function registrationModel(loading, RegistrationREST) {
        function Registration() {
            this.isLoading = loading.new();
        }
        
        Registration.loading = loading.new();
        Registration.sync = sync;
        
        function sync(params) {
            var self = this;
            var call = RegistrationREST.create(params);
            this.loading.watch(
              call.then(function() {
                console.log('set was successful!');
              }, function(err) {
                console.error('error while setting:', err);
              })
            );
            return call;
        }
        return Registration;
    }
})(window.angular);