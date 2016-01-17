'use strict';

/**
 * @ngdoc function
 * @name nistSupercloudApp.controller:LatencyCtrl
 * @description
 * # LatencyCtrl
 * Controller of the nistSupercloudApp
 */
angular.module('nistSupercloudApp')
  .controller('LatencyCtrl', function($scope, $routeParams, responseTimes)  {
    responseTimes.virtualMachine.name = $routeParams.lIp;
    responseTimes.virtualMachine.time = $routeParams.lTime;
    responseTimes.virtualMachine.value = $routeParams.lValue;

  });
/*
// Randomly add a data point every 500ms
var random = new TimeSeries();
setInterval(function() {
  random.append(new Date().getTime(), Math.random() * 10000);
}, 500);

function createTimeline() {
  var chart = new SmoothieChart();
  chart.addTimeSeries(random, { strokeStyle: 'rgba(0, 255, 0, 1)', fillStyle: 'rgba(0, 255, 0, 0.2)', lineWidth: 4 });
  chart.streamTo(document.getElementById("chart"), 500);
}

*/
