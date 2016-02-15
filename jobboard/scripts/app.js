'use strict';

/**
 * @ngdoc overview
 * @name empLogApp
 * @description
 * # empLogApp
 *
 * Main module of the application.
 */
var app = angular
  .module('empLogApp', [
    'ngRoute'
  ]);
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
      })
      .when('/detail', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  app.constant('globalData', {
    appName: 'Bob Management',
    appVersion: 1.0,
    jobdataurl: 'http://localhost:1010/jobs.json',
    giturl : 'https://api.github.com/users/'
});
