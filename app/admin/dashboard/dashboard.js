(function (angular) {
  "use strict";

  var app = angular.module('myApp.dashboard', ['ngRoute','firebase']);

  app.controller('DashboardController', ['$scope','$http','Userlist','$firebaseObject', function($scope,$http,Userlist, $firebaseObject) {
     
    var ref = new Firebase("https://amber-torch-9068.firebaseio.com/user");
    var vm = this;
    vm.myname = 'hello world';
    $scope.addItem = function(){
        alert('test');
        ref.push({"firstname":"vergel",
                  "middlename":"noda",
                  "lastname":"barit",
                  "age":26,
                  "hobbies":"basketball"
        })
    }
    
    $scope.removeItem = function(){
      alert(this.item);
    }
   
    
  // download the data into a local object
   $scope.data = $firebaseObject(ref); 
   
   console.log(ref);
   
    Userlist.getUsers().then(function(asyncUsers) {
       $scope.users = asyncUsers.user;
       console.log(asyncUsers);
       console.log(asyncUsers.user[0])
    });
    
  }]);
  
  app.factory('Userlist', function($http) {
    //temporary while the firebase has error
    var UserService = {
        getUsers: function() {
            // $http returns a 'promise'
            return $http.get("admin/temporary-data/Users.json").then(function(response) {
                return response.data;
            });
        }
    };

    return UserService;
});

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/admin_dashboard', {
      templateUrl: 'admin/dashboard/dashboard.html',
      controller: 'DashboardController',
      controllerAs:'DC'
    });
  }]);

})(angular);