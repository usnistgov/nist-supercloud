'use strict';

/**
 * @ngdoc service
 * @name nistSupercloudApp.responseTimes
 * @description
 * # responseTimes
 * Service in the nistSupercloudApp.
 */
angular.module('nistSupercloudApp')
  .service('responseTimes', ['$http', function ( $http) {
    var virtualMachine;
    this.fetch =  function(name) {
      $http.get("http://localhost:8080/api/latency/"+name)
        .then(function (res) {
          console.log("responseTimes " + JSON.stringify(res.data));
          virtualMachine = res.data;
        });
      return virtualMachine;
    }



    //return virtualMachine;
  }]);
