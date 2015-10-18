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
  'RegistrationREST',
  'RegistrationModel',
];

function registration (RegistrationREST, RegistrationModel) {
  var rgs = this;
  rgs.register = register;
  rgs.loading = RegistrationModel.loading;

  // TODO make more elegant
  function register () {
    var params = {
      username: (!!rgs.username) ? rgs.username : '--unspecified--',
      email: (!!rgs.email) ? rgs.email : '--unspecified--',
      password: (!!rgs.password) ? sha1(rgs.password) : '--unspecified--',
    }

    var call = RegistrationREST.signup(params);
    RegistrationModel.loading.watch(
      call.then(function() {
        console.log('set was successful!');
      }, function(err) {
        console.error('error while setting:', err);
      })
    );
  }
}