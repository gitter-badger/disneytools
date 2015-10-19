  "use strict";

angular.module('myApp.dashboard', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/admin_dashboard', {
        templateUrl: 'admin/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs:'dc'
      });
  }])
  .controller('DashboardController', dashboardController);
  
dashboardController.$inject = ['DashboardRest'];  
//dashboardController.$inject = ['','$firebaseObject'];
function dashboardController(DashboardRest){
  var db = this;
  db.displayUser = displayUser;
  function displayUser(){
      //TOD0 logical service for crud in user
      console.log(DashboardRest.getUsers());
  }

}