(function(angular) {
    'use strict';
    
    angular
        .module('myApp.registration')
        .service('RegistrationModel', registrationModel);
        
    registrationModel.$inject = [
        'loading',
        'RegistrationREST',
    ];
    
    function registrationModel(loading, RegistrationREST) {
        
        this.model = {};
        this.loading = loading.new();
        this.sync = sync;
        
        function sync() {
            var self = this;
            var params = {
              username: (!!self.model.username) ? self.model.username : '--unspecified--',
              email: (!!self.model.email) ? self.model.email : '--unspecified--',
              password: (!!self.model.password) ? sha1(self.model.password) : '--unspecified--',
            }
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
    }
})(window.angular);