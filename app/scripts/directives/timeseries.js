'use strict';

/**
 * @ngdoc directive
 * @name nistSupercloudApp.directive:timeSeries
 * @description
 * # timeSeries
 */
angular.module('nistSupercloudApp')
  .directive('timeSeries', function($interval) {
    return {
      restrict: 'E',
      require: '^smoothieGrid',

      scope: {
        rate:  '@',
        color: '@',
        width: '@',
        fill:  '@',
        callback: '&'
      },

      controller: function($scope, $element) {
          console.log("creating a new timeSeries");
        $scope.rate = $scope.rate || 1000;
        $scope.line = new TimeSeries();
        $scope.callback = $scope.callback ? $scope.callback : function() { return false; };
      },

      link: function(scope, element, attrs, controller) {
        controller.smoothie.streamTo(controller.canvas, scope.rate);

        controller.smoothie.addTimeSeries(scope.line, {
          strokeStyle: scope.color || 'green',
          fillStyle: scope.fill,
          lineWidth: scope.width || 2
        });

        var updateInterval = $interval(function() {
          var point = scope.callback();
          scope.line.append(point[0], point[1]);
        }, scope.rate);

        element.on('$destroy', function() {
          $interval.cancel(updateInterval);
        });
      }
    };
  });
