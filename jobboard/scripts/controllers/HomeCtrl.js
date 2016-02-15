'use strict';
angular.module('empLogApp').controller('HomeCtrl', HomeCtrl);
HomeCtrl.$inject=['$scope', 'globalData','$http', '$filter', '$location', 'httpservice','copydataservice']
function HomeCtrl($scope, globalData, $http, $filter, $location, httpservice,copydataservice) {
  $scope.showuser = function(name){
    console.log('submitted');
    httpservice.getdata(globalData.giturl + name).success(function(data) {
      $scope.data = data;
      console.log($scope.data);
      copydataservice.setdata(data);
      $location.path('/detail');
    })
    .error(function() {
      $scope.errormsg = "Please Enter a valied username of your github account"
  });
  };
}