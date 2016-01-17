'use strict';

/**
 * @ngdoc overview
 * @name nistSupercloudApp
 * @description
 * # nistSupercloudApp
 *
 * Main module of the application.
 */
angular
  .module('nistSupercloudApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/latency/:lIp/:lTime/:lvalue', {
        templateUrl: 'views/latency.html',
        controller: 'LatencyCtrl',
        controllerAs: 'latency'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
