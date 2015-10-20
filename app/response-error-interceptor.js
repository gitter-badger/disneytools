(function(angular) {
    'use strict';

    angular
        .module('myApp')
        .config(config);

    config.$inject = [
        '$httpProvider',
    ];

    interceptor.$inject = [
        'passive_messenger',
        '$q',
    ];

    function config($httpProvider) {
        $httpProvider.interceptors.push(interceptor);
    }

    function interceptor(passive_messenger, $q) {
        return {
            response: function(response) {
                return response;
            },

            responseError: function(rejection) {
                var error_message = "";
                error_message = rejection.data.error.indexOf(".code ") > -1 ? rejection.data.error.replace(".code ", " ID ") : rejection.data.error;
                passive_messenger.error(error_message);
                return $q.reject(rejection);
            }
        };
    }
})(window.angular);
