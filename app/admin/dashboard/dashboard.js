'use strict';

angular.module('myApp.dashboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/admin_dashboard', {
    templateUrl: 'admin/dashboard/dashboard.html',
    controller: 'DashboardController'
  });
}])

.controller('DashboardController', [function() {

}]);