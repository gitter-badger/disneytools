'use strict';

angular.module('myApp.registration', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/registration', {
    templateUrl: 'registration/registration.html',
    controller: 'RegistrationCtrl',
    controllerAs: 'rgs',
  });
}])

.controller('RegistrationCtrl', registration);

registration.$inject = [
  'RegistrationModel',
];

function registration(Registration) {
  var rgs = this;
  rgs.model = Registration.model; // This line links this controller to the Registration model
  rgs.register = register;
  rgs.loading = Registration.loading;

  function register() {
    Registration.sync();
  }
}