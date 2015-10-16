'use strict';

angular.module('myApp.admin', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/admin', {
    templateUrl: 'admin/admin_login.html',
    controller: 'AdminController'
  });
}])

.controller('AdminController', [function() {

}]);