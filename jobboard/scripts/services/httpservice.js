'use strict';
angular
  .module('empLogApp').factory('httpservice', function($http){
	var httpservice = {
		getdata : function(x){ 
			return $http.get(x);
		}
  };
  return httpservice;
});