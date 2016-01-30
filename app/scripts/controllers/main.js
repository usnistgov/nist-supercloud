'use strict';

/**
 * @ngdoc function
 * @name nistSupercloudApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nistSupercloudApp
 */
angular.module('nistSupercloudApp')
  .controller('MainCtrl',['$scope','responseTimes', function ($scope, responseTimes) {
    $scope.l2vm = function(name) {
      var host = name || "spcmonitor"
      var vm = responseTimes.fetch(host);
      console.log("MainCtrl " + JSON.stringify(vm));
      //TODO rename value in rrt
      //$scope.myFieldLabel =  '|'+responseTimes.virtualMachine.name + '|';
      return [vm.time , vm.value];
      //return [new Date().getTime(), Math.random() * 300.0];
    };

    $scope.foo = function() {
      return [new Date().getTime(), Math.floor(Math.random() * 30) + 20];
    };

    $scope.goo = function() {
      return [new Date().getTime(), Math.random() * 30.0];
    };
    
    $scope.vms = responseTimes.vmList();
    
    $scope.rcolor = function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        console.log("color "+color);
        return color;
    }
    
  }]);
