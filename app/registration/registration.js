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
  rgs.register = register;
  rgs.loading = Registration.loading;

  // TODO make more elegant
  function register() {
    var params = {
      username: (!!rgs.username) ? rgs.username : '--unspecified--',
      email: (!!rgs.email) ? rgs.email : '--unspecified--',
      password: (!!rgs.password) ? sha1(rgs.password) : '--unspecified--',
    };
    Registration.sync(params);
  }
}