'use strict';
angular.module('empLogApp')
.directive('mapWidget', function(){
	var mapFunction = function($scope,elm,attr){
		$scope.launchMap = function(){
			elm.css('height','600px');
			var $map = document.getElementById('map');
			$map.style.height = '500px';
        	var beaches = [
                ['Noida', 28.4916493, 77.4329048, 4],
                ['Banglore', 12.9852393, 77.7428009, 5],
                ['Gurgoan', 28.5133929, 77.0722759, 3],
                ['mumbai', 19.1608369, 72.989633, 2]
            ];
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 5,
                center: {
                    lat: 20.593684,
                    lng: 78.96288
                }
            });
            var image = {
                url: 'images/SapientLogo.jpg',
                // This marker is 20 pixels wide by 32 pixels high.
                size: new google.maps.Size(20, 32),
                // The origin for this image is (0, 0).
                origin: new google.maps.Point(0, 0),
                // The anchor for this image is the base of the flagpole at (0, 32).
                anchor: new google.maps.Point(0, 32)
            };
            var shape = {
                coords: [1, 1, 1, 20, 18, 20, 18, 1],
                type: 'poly'
            };
            for (var i = 0; i < beaches.length; i++) {
                var beach = beaches[i];
                var marker = new google.maps.Marker({
                    position: {
                        lat: beach[1],
                        lng: beach[2]
                    },
                    map: map,
                    icon: image,
                    shape: shape,
                    title: beach[0],
                    zIndex: beach[3],
                    animation: google.maps.Animation.DROP,
                });
            }
        	}
        };
	return{
		restrict: 'E',
        link : mapFunction,
        templateUrl: 'views/map.html'
	}
});