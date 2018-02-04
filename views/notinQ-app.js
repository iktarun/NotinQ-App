var app = angular.module("notinQApp", ['ngRoute','ngStorage','ngMaterial']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "store-data-form.html",
        controller : "StoreDataCtrl"
    })
    .otherwise({
        template : "<h1>None</h1><p>Nothing has been selected</p>"
    });
});

/* *************** Store Data controller *************************
*/

app.controller("StoreDataCtrl", ['$scope', '$location', '$http', '$localStorage', '$rootScope', function ($scope,$location,$http,$localStorage, $rootScope) {
    
    $scope.sections = [
      {name: 'In Store Scan', 'tabshref':'#instore_scan', 'ariaexpanded':true},
      {name: 'Home Delivery', 'tabshref':'#home_delivery', 'ariaexpanded':false},
      {name: 'Customer Pickup', 'tabshref':'#cust_pickup', 'ariaexpanded':false},
      {name: 'Telecalling', 'tabshref':'#telecalling', 'ariaexpanded':false}
    ];

    //Change Navigation Tags functionality

    $scope.selected = 'In Store Scan';
    $scope.setMaster = function(section) {
      $scope.selected = section;
    }

    $scope.isSelected = function(section) {
        return $scope.selected === section;
    }


    //Save store data staddress,stpincode,stcitystate,stlat,stlong,stcontact,sttelecall,stmaxitems
    $scope.postdata = function (staddress,stpincode,stcitystate,stlat,stlong,stcontact,sttelecall,stmaxitems) {
      //Call the services
      var authUrl =  'http://localhost:3000/api/save-store-data';
      $http({
        method: 'POST',
        url: authUrl,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        data: 'staddress='+staddress+'&stpincode='+stpincode+'&stcitystate='+stcitystate+'&stlat='+stlat+'&stlong='+stlong+'&stcontact='+stcontact+'&sttelecall='+sttelecall+'&stmaxitems='+stmaxitems
      }).then(function mySuccess(response) {
            if(response.data.success == true){
               
            }

        }, function myError(response) {
            console.log("Error has occured");
        });
    };


}]);//End of Registration controller


