'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'cs.loading',
  'myApp.admin',
  'myApp.dashboard',
  'myApp.registration',
  'myApp.dashboard'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/admin'});
}]);
