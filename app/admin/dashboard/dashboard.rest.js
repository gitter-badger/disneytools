(function (angular) {
    'use strict';
    
    angular
        .module('myApp.dashboard')
        .service('DashboardRest',dashboardRest);
    
    dashboardRest.$inject = [
        '$http',
        '$q'
        
    ];
    
    function dashboardRest($http, $q) {
        var url = 'https://amber-torch-9068.firebaseio.com/user';
        var firebase = new Firebase(url);
        
      
            
        var dashboardservice = {
           getUsers : getUsers
        };
        
            return dashboardservice;
            ;
            function getUsers(){
               return $http.get(url).then(getUsersComlete).catch(getUsersFailed);
                //return $firebaseObject(firebase);
            }
            
            function getUsersComlete(response) {
                return response.data.results;
           }
           
            function getUsersFailed(error) {
                console.log(error);
                // logger.error('XHR Failed for getUsers error.' + error.data);
            }
    }
    
})(window.angular);