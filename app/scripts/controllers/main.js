'use strict';

/**
 * @ngdoc function
 * @name nistSupercloudApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nistSupercloudApp
 */
angular.module('nistSupercloudApp')
  .controller('MainCtrl', function ($scope, responseTimes) {
    $scope.l2vm = function() {
      return [responseTimes.virtualMachine.time, responseTimes.virtualMachine.value];
    };

    $scope.foo = function() {
      return [new Date().getTime(), Math.random()*0.2];
    };

    $scope.goo = function() {
      return [new Date().getTime(), Math.random() * 30.0];
    };
  });
