'use strict';
angular.module('empLogApp')
    .controller('DetailCtrl', function($scope, $location, copydataservice) {
        $scope.detaildata = copydataservice.getdata();
        $scope.backhome = function() {
            $location.path('/');
        };
    });
