'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'cs.loading',
  'cs.passive-messenger',
  'myApp.admin',
  'myApp.dashboard',
  'myApp.registration',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/admin'});
}]);
