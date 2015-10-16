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

  // TODO make more elegant
  function register () {
    var params = {
      username: (!!vm.username) ? vm.username : '--unspecified--',
      email: (!!vm.email) ? vm.email : '--unspecified--',
      password: (!!vm.password) ? sha1(vm.password) : '--unspecified--',
    }

    var call = RegistrationREST.signup(params);

    call.then(function() {
      console.log('set was successful!');
    }, function(err) {
      console.error('error while setting:', err);
    });
  }
}