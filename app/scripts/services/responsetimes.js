'use strict';

/**
 * @ngdoc service
 * @name nistSupercloudApp.responseTimes
 * @description
 * # responseTimes
 * Service in the nistSupercloudApp.
 */
angular.module('nistSupercloudApp')
  .service('responseTimes', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.virtualMachine = {
      name: '',
      value: '',
      time: ''
    };

    //return virtualMachine;
  });
