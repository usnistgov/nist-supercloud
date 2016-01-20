'use strict';

/**
 * @ngdoc directive
 * @name nistSupercloudApp.directive:smoothieGrid
 * @description
 * # smoothieGrid
 */
angular.module('nistSupercloudApp')
  .directive('smoothieGrid', function () {
    return {
      template: '<canvas ng-transclude></canvas>',
      replace: true,
      transclude: true,
      restrict: 'E',

      scope: {
        gridLabelsColor: '@',
        background: '@',
        lineColor:  '@',
        lineWidth:  '@'
      },

      controller: function($scope, $element) {
        this.canvas = $element[0];

        this.smoothie = new SmoothieChart({
          grid: {
            strokeStyle: $scope.lineColor || 'transparent',
            //TODO fix the labels color
            fillStyle: $scope.gridLabelsColor || 'transparent'
          },
          labels: {
            fillStyle: $scope.background || 'transparent',
            fontSize:20,
            precision:6
          },
          timestampFormatter:
            SmoothieChart.timeFormatter
        });
      }
    };
  });
