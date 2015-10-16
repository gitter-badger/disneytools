'use strict';

angular.module('myApp.registration', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/registration', {
    templateUrl: 'registration/registration.html',
    controller: 'RegistrationCtrl'
  });
}])

.controller('RegistrationCtrl', registration);

registration.$inject = [
  'RegistrationREST',
];

function registration (RegistrationREST) {
  var vm = this;
  vm.register = register;

  function register () {
    var call = RegistrationREST.authenticate();
    call.then(function(data) {
      console.log('authenticated');
    }, function(err) {
      console.error('Error authenticating to Firebase!');
    });

  }
}